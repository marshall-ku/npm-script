console.log("RESULT<<EOF")
console.log([
    "| Component | Story | Success | Viewport | MisMatch Percentage |",
    "| - | - | - | - | - |",
    "| test-typography-typography | default | ❌ | tablet | 100%(no reference) |",
    "| test-typography-typography | default | ❌ | phone | 100%(no reference) |",
    "| test-components-button | string-children | ❌ | tablet | 100%(no reference) |",
    "| test-components-button | string-children | ❌ | phone | 100%(no reference) |",
    "| components-button | string-children | ✅ | phone | 0.00% |",
    "| components-button | string-children | ✅ | tablet | 0.09% |",
    "| typography-typography | default | ✅ | phone | 0.00% |",
    "| typography-typography | default | ✅ | tablet | 0.00% |",
].join("\n"))
console.log("EOF")