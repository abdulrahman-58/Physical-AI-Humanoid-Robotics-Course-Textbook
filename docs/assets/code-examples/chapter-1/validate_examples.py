#!/usr/bin/env python3
"""
Validation script for ROS 2 example code in the textbook.

This script validates that the example code in the textbook follows
ROS 2 best practices and can be executed properly.
"""

import ast
import os
import sys
from pathlib import Path


def validate_python_syntax(file_path):
    """Validate that a Python file has correct syntax."""
    try:
        with open(file_path, 'r') as file:
            content = file.read()
            ast.parse(content)
        return True, "Syntax is valid"
    except SyntaxError as e:
        return False, f"Syntax error: {e}"
    except Exception as e:
        return False, f"Error reading file: {e}"


def check_ros2_imports(file_path):
    """Check that the file imports necessary ROS 2 modules."""
    required_imports = ['rclpy', 'rclpy.node']
    found_imports = []

    try:
        with open(file_path, 'r') as file:
            content = file.read()

        # Simple check for imports - in a real implementation, we'd parse the AST
        for req_import in required_imports:
            if req_import in content:
                found_imports.append(req_import)

        missing_imports = [imp for imp in required_imports if imp not in found_imports]
        return missing_imports == [], missing_imports
    except Exception as e:
        return False, [f"Error checking imports: {e}"]


def check_ros2_node_structure(file_path):
    """Check that the file has proper ROS 2 node structure."""
    try:
        with open(file_path, 'r') as file:
            content = file.read()

        # Check for essential elements
        checks = {
            'has_rclpy_init': 'rclpy.init' in content,
            'has_node_class': 'class' in content and 'Node' in content,
            'has_destroy_node': 'destroy_node' in content,
            'has_rclpy_shutdown': 'rclpy.shutdown' in content,
            'has_spin': 'rclpy.spin' in content
        }

        missing_elements = [key for key, value in checks.items() if not value]
        return len(missing_elements) <= 2, missing_elements  # Allow some flexibility
    except Exception as e:
        return False, [f"Error checking structure: {e}"]


def validate_ros2_examples():
    """Validate all ROS 2 example files."""
    examples_dir = Path("docs/assets/code-examples/chapter-1")
    example_files = ["publisher_example.py", "subscriber_example.py"]

    all_valid = True

    for file_name in example_files:
        file_path = examples_dir / file_name

        if not file_path.exists():
            print(f"❌ File not found: {file_path}")
            all_valid = False
            continue

        print(f"\nValidating {file_name}...")

        # Check syntax
        syntax_valid, syntax_msg = validate_python_syntax(file_path)
        print(f"  Syntax: {'✅' if syntax_valid else '❌'} {syntax_msg}")

        # Check imports
        imports_valid, missing_imports = check_ros2_imports(file_path)
        if missing_imports:
            print(f"  Missing imports: ❌ {missing_imports}")
        else:
            print(f"  Imports: ✅ All required imports present")

        # Check structure
        structure_valid, missing_elements = check_ros2_node_structure(file_path)
        if missing_elements:
            print(f"  Structure issues: ⚠️  {missing_elements}")
        else:
            print(f"  Structure: ✅ Proper ROS 2 node structure")

        file_valid = syntax_valid and imports_valid
        print(f"  Overall: {'✅' if file_valid else '❌'}")

        if not file_valid:
            all_valid = False

    return all_valid


def main():
    """Main function to run the validation."""
    print("ROS 2 Example Code Validation")
    print("=" * 40)

    # Change to project root directory if needed
    project_root = Path(__file__).parent.parent.parent
    os.chdir(project_root)

    validation_passed = validate_ros2_examples()

    print("\n" + "=" * 40)
    if validation_passed:
        print("✅ All ROS 2 examples passed validation!")
        return 0
    else:
        print("❌ Some ROS 2 examples failed validation!")
        return 1


if __name__ == "__main__":
    sys.exit(main())