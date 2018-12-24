/**
An object containing several cache methods in promise

*/

const cache = {
  open: () => {
    caches.open("blog").then(cache => {
      cache.add(
        "/article/?sunt%20aut%20facere%20repellat%20provident%20occaecati%20excepturi%20optio%20reprehenderit"
      );
    });
  }
};

export default cache;
