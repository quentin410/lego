export default (params) => {
  const { uiFramework, componentLib, ts, packTool } = params
  return `
  {
    "name": "core",
    "private": true,
    "version": "0.0.0",
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "preview": "vite preview"
    },
    "dependencies": {
      ${componentLib === 'antd' ? `"antd": "^4.21.2",` : ''}
      ${
        uiFramework === 'react'
          ? `"react": "^18.0.0",
      "react-dom": "^18.0.0"`
          : ''
      }
    },
    "devDependencies": {
       ${
         uiFramework === 'react' && ts
           ? `"@types/react": "^18.0.0",
           "@types/react-dom": "^18.0.0",`
           : ''
       }
      ${
        ts
          ? `"@typescript-eslint/eslint-plugin": "^5.28.0",
      "@typescript-eslint/parser": "^5.28.0",
      "typescript": "^4.7.4",
      `
          : ''
      }
      ${
        packTool === 'vite'
          ? `"@vitejs/plugin-react": "^1.3.0",
      "vite": "^2.9.9",
      "vite-plugin-style-import": "2.0.0-beta.1"
      `
          : ''
      }
      "eslint": "^8.18.0",
      "eslint-config-google": "^0.14.0",
      "eslint-config-prettier": "^8.5.0",
      "eslint-plugin-prettier": "^4.0.0",
      "less": "^4.1.3",
      "prettier": "^2.7.1",
    }
  }
`
}
