# Data Model: Physical AI & Humanoid Robotics Textbook

## Content Entities

### Textbook Chapter
- **name**: String (e.g., "Chapter 1: ROS 2 Basics")
- **description**: String (brief overview of chapter content)
- **difficulty_level**: Enum (beginner, intermediate, advanced)
- **prerequisites**: Array of Chapter references
- **learning_objectives**: Array of String
- **content_sections**: Array of ContentSection
- **code_examples**: Array of CodeExample
- **labs**: Array of LabExercise
- **duration_weeks**: Number (estimated time to complete)

### ContentSection
- **title**: String (section heading)
- **content_type**: Enum (theory, practical, reference, exercise)
- **target_audience**: Enum (beginner, intermediate, advanced)
- **content**: String (MDX formatted content)
- **diagrams**: Array of DiagramReference
- **related_sections**: Array of ContentSection references

### CodeExample
- **title**: String (descriptive name)
- **language**: String (e.g., "python", "urdf", "yaml")
- **code**: String (actual code snippet)
- **description**: String (explanation of what the code does)
- **execution_context**: String (where the code should run)
- **expected_output**: String (what students should see)
- **difficulty_level**: Enum (beginner, intermediate, advanced)

### LabExercise
- **title**: String (lab name)
- **description**: String (what the lab teaches)
- **objectives**: Array of String (what students will learn)
- **prerequisites**: Array of String (what students need to know)
- **steps**: Array of LabStep
- **expected_outcome**: String (what students should achieve)
- **troubleshooting_tips**: Array of String

### LabStep
- **step_number**: Number
- **description**: String (what to do)
- **code_snippet**: String (optional code to execute)
- **expected_result**: String (what should happen)
- **hints**: Array of String (optional guidance)

### DiagramReference
- **id**: String (unique identifier)
- **title**: String (diagram title)
- **description**: String (what the diagram shows)
- **file_path**: String (path to image asset)
- **alt_text**: String (accessibility text)

### StudentProfile
- **id**: String (unique identifier)
- **skill_level**: Enum (beginner, intermediate, advanced)
- **preferred_learning_path**: Enum (theoretical, practical, mixed)
- **completed_chapters**: Array of Chapter references
- **completed_labs**: Array of LabExercise references
- **progress_percentage**: Number

### HardwareComponent
- **name**: String (e.g., "Jetson Orin Nano Super")
- **model_number**: String (e.g., "B012345678")
- **price_2025**: Number (in USD)
- **specifications**: Object (technical specs)
- **use_case**: String (how it's used in the textbook)
- **compatibility**: Array of String (what it works with)
- **alternatives**: Array of HardwareComponent references

## Relationships

- **TextbookChapter** contains many **ContentSection** (1 to many)
- **TextbookChapter** contains many **CodeExample** (1 to many)
- **TextbookChapter** contains many **LabExercise** (1 to many)
- **ContentSection** contains many **DiagramReference** (1 to many)
- **LabExercise** contains many **LabStep** (1 to many)
- **StudentProfile** tracks progress on **TextbookChapter** (many to many)
- **StudentProfile** tracks progress on **LabExercise** (many to many)
- **HardwareComponent** has alternatives to other **HardwareComponent** (many to many)

## Validation Rules

1. **Chapter Prerequisites**: A chapter's prerequisites must be from earlier chapters in the sequence
2. **Difficulty Progression**: Later chapters must not have lower difficulty than prerequisites
3. **Code Example Validation**: All code examples must be executable in the target environment
4. **Lab Exercise Dependencies**: Lab exercises must only reference concepts covered in the same or prerequisite chapters
5. **Content Completeness**: Each chapter must have at least one lab exercise
6. **Hardware Availability**: All recommended hardware must have valid model numbers and 2025 pricing
7. **Content Accessibility**: All diagrams must have alt text for accessibility
8. **Code Quality**: All code examples must follow rclpy best practices and include error handling

## State Transitions

### Chapter Completion States
- **Not Started** → **In Progress** (when student begins chapter)
- **In Progress** → **Completed** (when student completes all labs and exercises)
- **In Progress** → **Partially Completed** (when student exits before completion)
- **Partially Completed** → **Completed** (when student finishes remaining content)

### Lab Exercise States
- **Not Attempted** → **In Progress** (when student starts lab)
- **In Progress** → **Completed Successfully** (when lab objectives met)
- **In Progress** → **Completed with Issues** (when lab completed with errors)
- **In Progress** → **Abandoned** (when student stops without completion)