#!/usr/bin/env python3
"""
Isaac Sim Hello World Example
This script demonstrates basic Isaac Sim functionality with ROS 2 integration.
"""

import carb
import omni
from omni.isaac.core import World
from omni.isaac.core.utils.stage import add_reference_to_stage
from omni.isaac.core.utils.nucleus import get_assets_root_path
from omni.isaac.core.utils.prims import create_prim
from omni.isaac.core.objects import DynamicCuboid
from omni.isaac.core.utils.viewports import set_camera_view
import numpy as np
import sys
import rclpy
from rclpy.node import Node
from geometry_msgs.msg import Twist
from std_msgs.msg import String


class IsaacHelloWorld:
    """
    A simple Isaac Sim example demonstrating basic robot simulation
    """
    def __init__(self):
        # Initialize the world
        self.world = World(stage_units_in_meters=1.0)

        # Add a ground plane
        self.world.scene.add_default_ground_plane()

        # Add a simple cube to the scene
        self.cube = self.world.scene.add(
            DynamicCuboid(
                prim_path="/World/cube",
                name="cube",
                position=np.array([0, 0, 1.0]),
                size=np.array([0.1, 0.1, 0.1]),
                mass=0.1,
            )
        )

        print("Isaac Sim Hello World initialized!")
        print("Added a cube to the scene at position [0, 0, 1.0]")

    def setup_camera(self):
        """Set up the viewport camera to view the scene"""
        set_camera_view(eye=np.array([2, 2, 2]), target=np.array([0, 0, 0]))

    def run_simulation(self, steps=1000):
        """Run the simulation for a specified number of steps"""
        print(f"Running simulation for {steps} steps...")

        # Reset the world before starting simulation
        self.world.reset()

        step = 0
        while step < steps:
            # Step the world (this advances the physics simulation)
            self.world.step(render=True)

            # Print progress every 100 steps
            if step % 100 == 0:
                print(f"Simulation step {step}/{steps}")

            step += 1

        print("Simulation completed!")

        # Print final position of the cube
        current_position, current_orientation = self.cube.get_world_pose()
        print(f"Final cube position: {current_position}")
        print(f"Cube fell due to gravity - demonstrating physics simulation!")


class ROS2Controller(Node):
    """
    A simple ROS 2 controller node that could interface with Isaac Sim
    """
    def __init__(self):
        super().__init__('isaac_hello_controller')

        # Create a publisher for velocity commands
        self.cmd_vel_publisher = self.create_publisher(
            Twist,
            '/hello_robot/cmd_vel',
            10
        )

        # Create a timer to send commands periodically
        self.timer = self.create_timer(0.1, self.timer_callback)
        self.i = 0

        self.get_logger().info('Isaac Hello Controller initialized')

    def timer_callback(self):
        """Send a simple velocity command"""
        msg = Twist()
        msg.linear.x = 0.5  # Move forward at 0.5 m/s
        msg.angular.z = 0.1  # Slow rotation

        self.cmd_vel_publisher.publish(msg)
        self.i += 1

        if self.i % 10 == 0:  # Log every 10 callbacks
            self.get_logger().info(f'Published velocity command: linear.x={msg.linear.x}, angular.z={msg.angular.z}')


def main():
    """Main function to run the Isaac Sim Hello World example"""
    print("Starting Isaac Sim Hello World Example")
    print("This example demonstrates:")
    print("1. Creating a simple scene with physics")
    print("2. Adding objects to the simulation")
    print("3. Running the physics simulation")
    print("4. Basic ROS 2 integration concepts")

    # Initialize Isaac Sim
    try:
        # Create the hello world simulation
        hello_sim = IsaacHelloWorld()
        hello_sim.setup_camera()

        # Run the simulation
        hello_sim.run_simulation(steps=500)

        print("\nIsaac Sim Hello World completed successfully!")
        print("This example shows the basics of Isaac Sim:")
        print("- Scene creation and management")
        print("- Physics simulation with gravity")
        print("- Object dynamics and interactions")
        print("- Simulation stepping and rendering")

    except Exception as e:
        print(f"Error running Isaac Sim: {e}")
        return 1

    return 0


def run_ros2_example():
    """Example of how ROS 2 could be integrated with Isaac Sim"""
    print("\nROS 2 Integration Example:")
    print("This shows how a ROS 2 node could interface with Isaac Sim")

    # Initialize ROS 2
    rclpy.init(args=None)

    # Create controller node
    controller = ROS2Controller()

    # Run for a few seconds to demonstrate the concept
    try:
        print("Running ROS 2 controller (this would normally run continuously)...")
        # In a real implementation, you would use rclpy.spin(controller)
        # For this example, we'll just run for a short time
        for i in range(20):
            rclpy.spin_once(controller, timeout_sec=0.1)
            if i % 5 == 0:
                print(f"ROS 2 loop iteration {i+1}/20")

        print("ROS 2 controller example completed")

    except KeyboardInterrupt:
        print("ROS 2 example interrupted by user")
    finally:
        controller.destroy_node()
        rclpy.shutdown()


if __name__ == "__main__":
    # Run the main Isaac Sim example
    result = main()

    if result == 0:
        # Optionally run the ROS 2 example
        run_ros2_example()

    print("\nIsaac Sim Hello World Example finished!")
    print("This demonstrates the foundation for more complex robot simulation scenarios.")