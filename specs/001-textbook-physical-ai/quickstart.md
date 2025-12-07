# Quickstart Guide: Physical AI & Humanoid Robotics Textbook

## Prerequisites

Before starting with the textbook, ensure you have the following setup:

### Hardware Requirements
- **Computer**: RTX 4070 Ti or equivalent GPU
- **OS**: Ubuntu 22.04 LTS (recommended) or compatible Linux distribution
- **RAM**: 16GB minimum, 32GB recommended
- **Storage**: 100GB free space for ROS 2, Isaac Sim, and textbook assets

### Software Requirements
- **ROS 2**: Kilted Kaiju distribution
- **Isaac Sim**: 2025 version with compatible NVIDIA drivers
- **Python**: 3.10 or higher
- **Git**: Version control system
- **Node.js**: 18+ for Docusaurus (textbook development)

## Initial Setup

### 1. Install ROS 2 Kilted Kaiju
```bash
# Add ROS 2 repository
sudo apt update && sudo apt install curl gnupg lsb-release
curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key | sudo gpg --dearmor -o /usr/share/keyrings/ros-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(source /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null

sudo apt update
sudo apt install ros-rolling-desktop
sudo apt install python3-rosdep python3-rosinstall python3-rosinstall-generator python3-pip

# Source ROS 2 environment
source /opt/ros/rolling/setup.bash
echo "source /opt/ros/rolling/setup.bash" >> ~/.bashrc
```

### 2. Install Isaac Sim 2025
```bash
# Download and install Isaac Sim from NVIDIA Developer website
# Follow the official installation guide for Ubuntu 22.04
# Ensure NVIDIA drivers are compatible (535.0 or later recommended)

# Verify Isaac Sim installation
cd /path/to/isaac-sim
./isaac-sim.launch.sh --version
```

### 3. Set up Python Environment
```bash
# Create virtual environment
python3 -m venv ~/physical-ai-env
source ~/physical-ai-env/bin/activate
pip install --upgrade pip

# Install ROS 2 Python dependencies
pip install rclpy transforms3d numpy matplotlib
```

### 4. Clone and Set up Textbook Repository
```bash
# Clone the textbook repository
git clone https://github.com/abdulrahman-58/Physical-AI-Humanoid-Robotics-Course-Textbook.git
cd physical-ai-humanoid-textbook

# Install Docusaurus dependencies
npm install

# Start the development server
npm start
```

## Running Your First Example

### 1. Navigate to Chapter 1 Code Examples
```bash
# Activate ROS 2 environment
source /opt/ros/rolling/setup.bash
source ~/physical-ai-env/bin/activate

# Navigate to the first chapter's code example
cd docs/assets/code-examples/chapter-1/ros2-basics
```

### 2. Run a Basic ROS 2 Publisher/Subscriber
```bash
# Terminal 1: Start ROS 2 daemon
source /opt/ros/rolling/setup.bash
ros2 daemon start

# Terminal 2: Run the publisher
source /opt/ros/rolling/setup.bash
cd docs/assets/code-examples/chapter-1/ros2-basics
python3 publisher_example.py

# Terminal 3: Run the subscriber
source /opt/ros/rolling/setup.bash
cd docs/assets/code-examples/chapter-1/ros2-basics
python3 subscriber_example.py
```

## Textbook Navigation Tips

### Difficulty Level Indicators
- 🟢 **Beginner**: No prior experience required
- 🟡 **Intermediate**: Basic ROS 2 knowledge recommended
- 🔴 **Advanced**: Significant robotics experience recommended

### Lab Exercise Structure
Each lab follows this pattern:
1. **Objective**: What you'll learn
2. **Prerequisites**: What you need to know beforehand
3. **Steps**: Detailed instructions
4. **Expected Outcome**: What success looks like
5. **Troubleshooting**: Common issues and solutions

### Personalization Features
- Use the difficulty filter to adjust content complexity
- Track your progress through the curriculum
- Access hardware recommendations tailored to your budget
- Switch between different learning paths (theoretical vs. practical focus)

## Troubleshooting Common Issues

### ROS 2 Environment Not Sourcing
**Problem**: `ros2` command not found
**Solution**:
```bash
source /opt/ros/rolling/setup.bash
# Add to your ~/.bashrc to make permanent
echo "source /opt/ros/rolling/setup.bash" >> ~/.bashrc
```

### Isaac Sim Not Launching
**Problem**: Isaac Sim fails to start
**Solution**:
- Verify NVIDIA drivers are up to date
- Check that your GPU supports Isaac Sim requirements
- Ensure no other OpenGL applications are consuming too many resources

### Code Examples Not Working
**Problem**: Python code examples fail
**Solution**:
- Ensure you're using the correct Python environment: `source ~/physical-ai-env/bin/activate`
- Verify ROS 2 is sourced: `source /opt/ros/rolling/setup.bash`
- Check that all dependencies are installed: `pip install rclpy transforms3d numpy matplotlib`