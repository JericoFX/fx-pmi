// uno.config.ts
import { defineConfig } from "unocss";
export default defineConfig({
  // ...UnoCSS options
  shortcuts: {
    "flex-center": "flex justify-center items-center h-full",
    "complete-screen": "w-screen h-screen relative",
    "full-screen": "w-full h-full",
  },
  rules: [
    [
      "absolute-center",
      {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
    ],
    [
      "absolute-top-center",
      {
        position: "absolute",
        top: "1%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
    ],
    [
      "absolute-bottom-center",
      {
        position: "absolute",
        bottom: "1%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
    ],
    ["fit", { width: "100%", height: "100%" }],
    [
      "inn",
      {
        width: "80%",
        height: "5vh",
        "background-color": "transparent !important",
        color: "white",
        "font-width": "300",
        "font-size": "2vw",
        "border-radius": "0",
        "text-align": "center",
      },
    ],
  ],
});
