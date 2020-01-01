import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

class Request {
  private _loaderHtml?: HTMLDivElement;

  constructor() {}

  private getLoaderHtml(): HTMLDivElement {
    if (!this._loaderHtml) {
      const div = document.createElement("div");
      div.style.position = "fixed";
      div.style.height = "100%";
      div.style.width = "100%";
      div.style.opacity = "0.5";
      div.style.background = "black";
      div.style.zIndex = "5000";
      div.style.top = "0";
      const divload = document.createElement("div");
      divload.style.height = "120px";
      divload.style.width = "120px";
      divload.style.marginTop = "-60px";
      divload.style.marginRight = "-60px";
      divload.style.zIndex = "5001";
      divload.style.border = "16px solid #c7c5c5";
      divload.style.borderTop = "16px solid #005cbe";
      divload.style.borderRadius = "50%";
      divload.style.animation = "spin 2s linear infinite";
      divload.style.textAlign = "center";
      divload.style.position = "absolute";
      divload.style.top = "50%";
      divload.style.right = "50%";
      div.appendChild(divload);
      this._loaderHtml = div;
    }
    return this._loaderHtml;
  }
  public get(url: string, config?: AxiosRequestConfig) {
    this.blockScreenAndShowLoader();
    const p = axios.get(url, config);
    return this.chainPromises(p);
  }
  public post(url: string, data?: any, config?: AxiosRequestConfig) {
    this.blockScreenAndShowLoader();
    const p = axios.post(url, data, config);
    return this.chainPromises(p);
  }
  private chainPromises(promise: Promise<AxiosResponse>) {
    return promise
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return Promise.reject(error);
      })
      .finally(() => {
        this.unBlockScreenAndHideLoader();
      });
  }
  private blockScreenAndShowLoader() {
    document.body.appendChild(this.getLoaderHtml());
  }
  private unBlockScreenAndHideLoader() {
    document.body.removeChild(this.getLoaderHtml());
  }
}

export const request = new Request();
