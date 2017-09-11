let metaContents = 
  /** @type {HTMLMetaElement} */(document.head.querySelector('meta[name="fegrocer-api-endpoint"]')).content;
let apiEndpoint = new URL(window.location.href);
apiEndpoint.protocol = window.location.protocol;

export const endpoint = apiEndpoint.toString();