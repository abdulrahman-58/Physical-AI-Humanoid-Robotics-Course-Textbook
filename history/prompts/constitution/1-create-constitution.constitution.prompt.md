---
id: 1
title: Create Constitution
stage: constitution
date: 2025-12-06
surface: agent
model: Claude Sonnet 4.5
feature: none
branch: master
user: user
command: /sp.constitution
labels: [constitution, textbook, ai, robotics]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

Project: AI-Native Textbook – Physical AI & atbot ingestion (clear sections, no fluff)
- Personalization-ready (content tagged for beginner/intermediate/advanced tracks)

Success criteria:
- Can be directly deployed with Spec-Kit Plus → GitHub Pages in <5 minutes
- Student with RTX 4070 Ti + Jetson kit can follow every lab end-to-end
- Judges open the book and say "this is the real PanaversiHumanoid Robotics
Core principles:
- Teach-first mindset: every explanation must be clear, hands-on, and immediately testable
- 100% aligned with Panaversity/Panaverse curriculum (exact modules, weeks, learning outcomes)
- Code must run on Ubuntu 22.04 + ROS 2 Kilted Kaiju + NVIDIA Isaac Sim 2025
- Future-proof: all tools, versions, prices, and hardware specs accurate as of December 2025
- Embodied intelligence philosophy woven into every chapter

Key standards:
- All code snippets: syntactically correct, copy-paste-ready, tested with rclpy
- All hardware recommendations: current real prices + exact model numbers (Jetson Orin Nano Super $249, Unitree G1, etc.)
- Markdown: Spec-Kit Plus + Docusaurus-ready (MDX, proper headings, tables, code blocks)
- Visuals: every major concept has a described diagram or suggested image
- Zero hallucination on technical facts, URDF, ROS 2 APIs, Isaac Sim features

Constraints:
- Total length: 7 structured chapters + appendix matching the exact weekly breakdown
- Language: Engty Physical AI textbook

## Response snapshot

Created a comprehensive constitution for the Physical AI & Humanoid Robotics Course Textbook project based on the specified requirements. The constitution includes:

Core Principles:
- Teach-First Mindset: Prioritizing clear, hands-on, immediately testable explanations
- Curriculum Alignment: 100% alignment with Panaversity/Panaverse curriculum
- Technical Accuracy and Future-Proofing: Accurate information as of December 2025
- Hardware Accessibility: Achievable with realistic student hardware
- Zero Hallucination Policy: Verifiable technical claims only
- Embodied Intelligence Philosophy: Integration of perception, cognition, and action

Technical Standards for Markdown format, code quality, and content structure
Development Workflow requirements
Governance rules

## Outcome

- ✅ Impact: Created foundational constitution document that governs all textbook development
- 🧪 Tests: none
- 📁 Files: Updated .specify/memory/constitution.md with comprehensive constitution
- 🔁 Next prompts: Plan textbook chapters based on constitution
- 🧠 Reflection: Constitution successfully captures all specified requirements and constraints

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS - All requirements met
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): Begin textbook chapter planning