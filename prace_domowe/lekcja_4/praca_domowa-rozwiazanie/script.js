function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const len = promises.length;
    const results = [];
    let completed = 0;

    if (!len) {
      resolve(results);
    }

    promises.forEach(async (promise) => {
      try {
        results.push(await promise);
        completed++;
        if (completed === len) {
          resolve(results);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
}

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(async (promise) => {
      try {
        const result = await promise;
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  });
}
