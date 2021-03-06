import { app } from "electron"
import { loadImageEvent } from "../common/ipcEvents"
import { createCaptureWindow } from "./capture/captureWindow"
import { createEditorWindow, showEditorWindow } from "./editor/editorWindow"
import { loadImageFromFileDialog } from "./editor/loadImageFromFileDialog"
import { registerHotkeys } from "./hotkeys"
import { createTrayIcon } from "./createTrayIcon"

app.on("ready", () => {
  registerHotkeys()
  createTrayIcon()

  createEditorWindow()
  createCaptureWindow()

  // show at startup for debugging
  // later this would be triggered by something else, probably post capture
  showEditorWindow()
})

loadImageEvent.main.listen(loadImageFromFileDialog)
