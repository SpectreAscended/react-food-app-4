const useHttp = async (requestConfig, applyData) => {
  try {
    let options;
    if (!requestConfig.method) {
      options = {};
    } else {
      options = {
        method: requestConfig.method,
        headers: requestConfig.headers,
        body: requestConfig.body,
      };
    }

    const res = await fetch(requestConfig.url, options);

    if (!res.ok) throw new Error('Something went wrong');

    const data = await res.json();

    applyData(data);
  } catch (err) {
    console.error(err.message);
  }
};

export default useHttp;
