import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "drag-files-app";
  public files: any[] = [];

  constructor() {}

  onFileChange(pFileList: any) {
    const newFiles = Object.keys(pFileList).map((key) => pFileList[key]);
    newFiles.forEach((f) => this.files.push(f));
    console.log(this.files);
  }

  deleteFile(f: File) {
    this.files = this.files.filter(function (w) {
      return w.name != f.name;
    });
  }
}
