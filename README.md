# Frontend Engineer Challenge

This repo is of a dropdown written from scratch, done for a technical assessment.

## Project Overview

This repository contains a custom-built dropdown menu component developed using either React or plain JavaScript. The component is designed from scratch without relying on any pre-built dropdowns from component libraries (ShadCN, Material UI, HTML select, or Ant Design). The focus of this implementation is on creating an elegant component architecture rather than on styling.

## Features and Functionality

### Design and Interface

- The dropdown menu can be opened and closed by the user.
- It supports both single and multiple selection modes, with separate demonstrations for each.
- Users have the ability to select or deselect all options simultaneously.
- When the dropdown is closed, the selected option(s) remain visible.

### API and Reusability

- The component is designed to handle both single and multi-select functionalities.
- It offers a flexible API, making it reusable across various applications, akin to a component library.
- The component can function as a controlled component, providing developers with greater control over its behavior.

### Performance Considerations

- The component is optimized to efficiently render large lists.
- It avoids unnecessary computations to maintain performance.

## Setup and Usage

1. Clone this repository
2. Navigate to the project directory.
3. Install the necessary dependencies by executing:
   ```sh
   npm install
   ```
4. Start the development server with:
   ```sh
   npm start
   ```
5. Open your browser and go to `http://localhost:3000` to see the dropdown component in action.
6. For production, build the project using:
   ```sh
   npm run build
   ```
