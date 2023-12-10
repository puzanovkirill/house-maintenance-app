// eslint-disable-next-line @typescript-eslint/no-explicit-any
function error(message: any, ...messages: any[]) {
  if (process.env.NODE_ENV === 'development') {
    let callerName = '';
    try {
      throw new Error(message, ...messages);
    } catch (e: unknown) {
      const re = /(\w+)@|at (\w+) \(/g;
      const stack = e instanceof Error && e.stack ? e.stack : 'unknown stack';
      let ms;
      re.exec(stack), (ms = re.exec(stack));
      if (ms) callerName = ms[1] || ms[2];
      console.error(
        `[ERROR]: An error occured inside ${callerName}, \n[ERROR MESSAGE]:`,
        message,
        ...messages,
        `\n[GENERATED ERROR]: ${e}`
      );
    }
  }
}

const log = (message: unknown, ...messages: unknown[]) => {
  if (process.env.NODE_ENV === 'development') console.log(message, ...messages);
};

export const logger = {
  log,
  error,
};
