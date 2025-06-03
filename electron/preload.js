// preload.js
import { contextBridge } from "electron";

contextBridge.exposeInMainWorld('api', {
  // You can expose safe APIs here
  sayHello: () => 'Hello from Electron',
});
