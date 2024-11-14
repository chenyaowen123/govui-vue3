import {
  require_node_path,
  require_node_url,
  require_promises
} from "./chunk-CT5R67CV.js";
import {
  __esm,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __publicField,
  __toESM
} from "./chunk-ULBN3QDT.js";

// node_modules/@humanfs/core/src/hfs.js
function assertValidFileOrDirPath(fileOrDirPath) {
  if (!fileOrDirPath || !(fileOrDirPath instanceof URL) && typeof fileOrDirPath !== "string") {
    throw new TypeError("Path must be a non-empty string or URL.");
  }
}
function assertValidFileContents(contents) {
  if (typeof contents !== "string" && !(contents instanceof ArrayBuffer) && !ArrayBuffer.isView(contents)) {
    throw new TypeError(
      "File contents must be a string, ArrayBuffer, or ArrayBuffer view."
    );
  }
}
function toUint8Array(contents) {
  if (contents instanceof Uint8Array) {
    return contents;
  }
  if (typeof contents === "string") {
    return encoder.encode(contents);
  }
  if (contents instanceof ArrayBuffer) {
    return new Uint8Array(contents);
  }
  if (ArrayBuffer.isView(contents)) {
    const bytes = contents.buffer.slice(
      contents.byteOffset,
      contents.byteOffset + contents.byteLength
    );
    return new Uint8Array(bytes);
  }
  throw new TypeError(
    "Invalid contents type. Expected string or ArrayBuffer."
  );
}
var decoder, encoder, NoSuchMethodError, MethodNotSupportedError, ImplAlreadySetError, LogEntry, _baseImpl, _impl, _logs, _Hfs_instances, log_fn, assertImplMethod_fn, assertImplMethodAlt_fn, callImplMethod_fn, callImplMethodWithoutLog_fn, callImplMethodAlt_fn, Hfs;
var init_hfs = __esm({
  "node_modules/@humanfs/core/src/hfs.js"() {
    decoder = new TextDecoder();
    encoder = new TextEncoder();
    NoSuchMethodError = class extends Error {
      /**
       * Creates a new instance.
       * @param {string} methodName The name of the method that was missing.
       */
      constructor(methodName) {
        super(`Method "${methodName}" does not exist on impl.`);
      }
    };
    MethodNotSupportedError = class extends Error {
      /**
       * Creates a new instance.
       * @param {string} methodName The name of the method that was missing.
       */
      constructor(methodName) {
        super(`Method "${methodName}" is not supported on this impl.`);
      }
    };
    ImplAlreadySetError = class extends Error {
      /**
       * Creates a new instance.
       */
      constructor() {
        super(`Implementation already set.`);
      }
    };
    LogEntry = class {
      /**
       * Creates a new instance.
       * @param {string} type The type of log entry.
       * @param {any} [data] The data associated with the log entry.
       */
      constructor(type, data) {
        /**
         * The type of log entry.
         * @type {string}
         */
        __publicField(this, "type");
        /**
         * The data associated with the log entry.
         * @type {any}
         */
        __publicField(this, "data");
        /**
         * The time at which the log entry was created.
         * @type {number}
         */
        __publicField(this, "timestamp", Date.now());
        this.type = type;
        this.data = data;
      }
    };
    Hfs = class {
      /**
       * Creates a new instance.
       * @param {object} options The options for the instance.
       * @param {HfsImpl} options.impl The implementation to use.
       */
      constructor({ impl }) {
        __privateAdd(this, _Hfs_instances);
        /**
         * The base implementation for this instance.
         * @type {HfsImpl}
         */
        __privateAdd(this, _baseImpl);
        /**
         * The current implementation for this instance.
         * @type {HfsImpl}
         */
        __privateAdd(this, _impl);
        /**
         * A map of log names to their corresponding entries.
         * @type {Map<string,Array<LogEntry>>}
         */
        __privateAdd(this, _logs, /* @__PURE__ */ new Map());
        __privateSet(this, _baseImpl, impl);
        __privateSet(this, _impl, impl);
      }
      /**
       * Starts a new log with the given name.
       * @param {string} name The name of the log to start;
       * @returns {void}
       * @throws {Error} When the log already exists.
       * @throws {TypeError} When the name is not a non-empty string.
       */
      logStart(name) {
        if (!name || typeof name !== "string") {
          throw new TypeError("Log name must be a non-empty string.");
        }
        if (__privateGet(this, _logs).has(name)) {
          throw new Error(`Log "${name}" already exists.`);
        }
        __privateGet(this, _logs).set(name, []);
      }
      /**
       * Ends a log with the given name and returns the entries.
       * @param {string} name The name of the log to end.
       * @returns {Array<LogEntry>} The entries in the log.
       * @throws {Error} When the log does not exist.
       */
      logEnd(name) {
        if (__privateGet(this, _logs).has(name)) {
          const logs = __privateGet(this, _logs).get(name);
          __privateGet(this, _logs).delete(name);
          return logs;
        }
        throw new Error(`Log "${name}" does not exist.`);
      }
      /**
       * Determines if the current implementation is the base implementation.
       * @returns {boolean} True if the current implementation is the base implementation.
       */
      isBaseImpl() {
        return __privateGet(this, _impl) === __privateGet(this, _baseImpl);
      }
      /**
       * Sets the implementation for this instance.
       * @param {object} impl The implementation to use.
       * @returns {void}
       */
      setImpl(impl) {
        __privateMethod(this, _Hfs_instances, log_fn).call(this, "implSet", impl);
        if (__privateGet(this, _impl) !== __privateGet(this, _baseImpl)) {
          throw new ImplAlreadySetError();
        }
        __privateSet(this, _impl, impl);
      }
      /**
       * Resets the implementation for this instance back to its original.
       * @returns {void}
       */
      resetImpl() {
        __privateMethod(this, _Hfs_instances, log_fn).call(this, "implReset");
        __privateSet(this, _impl, __privateGet(this, _baseImpl));
      }
      /**
       * Reads the given file and returns the contents as text. Assumes UTF-8 encoding.
       * @param {string|URL} filePath The file to read.
       * @returns {Promise<string|undefined>} The contents of the file.
       * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
       * @throws {TypeError} When the file path is not a non-empty string.
       */
      async text(filePath) {
        assertValidFileOrDirPath(filePath);
        const result = await __privateMethod(this, _Hfs_instances, callImplMethodAlt_fn).call(this, "bytes", "text", filePath);
        return result ? decoder.decode(result) : void 0;
      }
      /**
       * Reads the given file and returns the contents as JSON. Assumes UTF-8 encoding.
       * @param {string|URL} filePath The file to read.
       * @returns {Promise<any|undefined>} The contents of the file as JSON.
       * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
       * @throws {SyntaxError} When the file contents are not valid JSON.
       * @throws {TypeError} When the file path is not a non-empty string.
       */
      async json(filePath) {
        assertValidFileOrDirPath(filePath);
        const result = await __privateMethod(this, _Hfs_instances, callImplMethodAlt_fn).call(this, "bytes", "json", filePath);
        return result ? JSON.parse(decoder.decode(result)) : void 0;
      }
      /**
       * Reads the given file and returns the contents as an ArrayBuffer.
       * @param {string|URL} filePath The file to read.
       * @returns {Promise<ArrayBuffer|undefined>} The contents of the file as an ArrayBuffer.
       * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
       * @throws {TypeError} When the file path is not a non-empty string.
       * @deprecated Use bytes() instead.
       */
      async arrayBuffer(filePath) {
        assertValidFileOrDirPath(filePath);
        const result = await __privateMethod(this, _Hfs_instances, callImplMethodAlt_fn).call(this, "bytes", "arrayBuffer", filePath);
        return result == null ? void 0 : result.buffer;
      }
      /**
       * Reads the given file and returns the contents as an Uint8Array.
       * @param {string|URL} filePath The file to read.
       * @returns {Promise<Uint8Array|undefined>} The contents of the file as an Uint8Array.
       * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
       * @throws {TypeError} When the file path is not a non-empty string.
       */
      async bytes(filePath) {
        assertValidFileOrDirPath(filePath);
        return __privateMethod(this, _Hfs_instances, callImplMethod_fn).call(this, "bytes", filePath);
      }
      /**
       * Writes the given data to the given file. Creates any necessary directories along the way.
       * If the data is a string, UTF-8 encoding is used.
       * @param {string|URL} filePath The file to write.
       * @param {string|ArrayBuffer|ArrayBufferView} contents The data to write.
       * @returns {Promise<void>} A promise that resolves when the file is written.
       * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
       * @throws {TypeError} When the file path is not a non-empty string.
       */
      async write(filePath, contents) {
        assertValidFileOrDirPath(filePath);
        assertValidFileContents(contents);
        __privateMethod(this, _Hfs_instances, log_fn).call(this, "write", filePath, contents);
        let value = toUint8Array(contents);
        return __privateMethod(this, _Hfs_instances, callImplMethodWithoutLog_fn).call(this, "write", filePath, value);
      }
      /**
       * Appends the given data to the given file. Creates any necessary directories along the way.
       * If the data is a string, UTF-8 encoding is used.
       * @param {string|URL} filePath The file to append to.
       * @param {string|ArrayBuffer|ArrayBufferView} contents The data to append.
       * @returns {Promise<void>} A promise that resolves when the file is appended to.
       * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
       * @throws {TypeError} When the file path is not a non-empty string.
       * @throws {TypeError} When the file contents are not a string or ArrayBuffer.
       * @throws {Error} When the file cannot be appended to.
       */
      async append(filePath, contents) {
        assertValidFileOrDirPath(filePath);
        assertValidFileContents(contents);
        __privateMethod(this, _Hfs_instances, log_fn).call(this, "append", filePath, contents);
        let value = toUint8Array(contents);
        return __privateMethod(this, _Hfs_instances, callImplMethodWithoutLog_fn).call(this, "append", filePath, value);
      }
      /**
       * Determines if the given file exists.
       * @param {string|URL} filePath The file to check.
       * @returns {Promise<boolean>} True if the file exists.
       * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
       * @throws {TypeError} When the file path is not a non-empty string.
       */
      async isFile(filePath) {
        assertValidFileOrDirPath(filePath);
        return __privateMethod(this, _Hfs_instances, callImplMethod_fn).call(this, "isFile", filePath);
      }
      /**
       * Determines if the given directory exists.
       * @param {string|URL} dirPath The directory to check.
       * @returns {Promise<boolean>} True if the directory exists.
       * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
       * @throws {TypeError} When the directory path is not a non-empty string.
       */
      async isDirectory(dirPath) {
        assertValidFileOrDirPath(dirPath);
        return __privateMethod(this, _Hfs_instances, callImplMethod_fn).call(this, "isDirectory", dirPath);
      }
      /**
       * Creates the given directory.
       * @param {string|URL} dirPath The directory to create.
       * @returns {Promise<void>} A promise that resolves when the directory is created.
       * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
       * @throws {TypeError} When the directory path is not a non-empty string.
       */
      async createDirectory(dirPath) {
        assertValidFileOrDirPath(dirPath);
        return __privateMethod(this, _Hfs_instances, callImplMethod_fn).call(this, "createDirectory", dirPath);
      }
      /**
       * Deletes the given file or empty directory.
       * @param {string|URL} filePath The file to delete.
       * @returns {Promise<boolean>} A promise that resolves when the file or
       *   directory is deleted, true if the file or directory is deleted, false
       *   if the file or directory does not exist.
       * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
       * @throws {TypeError} When the file path is not a non-empty string.
       */
      async delete(filePath) {
        assertValidFileOrDirPath(filePath);
        return __privateMethod(this, _Hfs_instances, callImplMethod_fn).call(this, "delete", filePath);
      }
      /**
       * Deletes the given file or directory recursively.
       * @param {string|URL} dirPath The directory to delete.
       * @returns {Promise<boolean>} A promise that resolves when the file or
       *   directory is deleted, true if the file or directory is deleted, false
       *   if the file or directory does not exist.
       * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
       * @throws {TypeError} When the directory path is not a non-empty string.
       */
      async deleteAll(dirPath) {
        assertValidFileOrDirPath(dirPath);
        return __privateMethod(this, _Hfs_instances, callImplMethod_fn).call(this, "deleteAll", dirPath);
      }
      /**
       * Returns a list of directory entries for the given path.
       * @param {string|URL} dirPath The path to the directory to read.
       * @returns {AsyncIterable<HfsDirectoryEntry>} A promise that resolves with the
       *   directory entries.
       * @throws {TypeError} If the directory path is not a string or URL.
       * @throws {Error} If the directory cannot be read.
       */
      async *list(dirPath) {
        assertValidFileOrDirPath(dirPath);
        yield* await __privateMethod(this, _Hfs_instances, callImplMethod_fn).call(this, "list", dirPath);
      }
      /**
       * Walks a directory using a depth-first traversal and returns the entries
       * from the traversal.
       * @param {string|URL} dirPath The path to the directory to walk.
       * @param {Object} [options] The options for the walk.
       * @param {(entry:HfsWalkEntry) => Promise<boolean>|boolean} [options.directoryFilter] A filter function to determine
       * 	if a directory's entries should be included in the walk.
       * @param {(entry:HfsWalkEntry) => Promise<boolean>|boolean} [options.entryFilter] A filter function to determine if
       * 	an entry should be included in the walk.
       * @returns {AsyncIterable<HfsWalkEntry>} A promise that resolves with the
       * 	directory entries.
       * @throws {TypeError} If the directory path is not a string or URL.
       * @throws {Error} If the directory cannot be read.
       */
      async *walk(dirPath, { directoryFilter = () => true, entryFilter = () => true } = {}) {
        assertValidFileOrDirPath(dirPath);
        __privateMethod(this, _Hfs_instances, log_fn).call(this, "walk", dirPath, { directoryFilter, entryFilter });
        const walk = (async function* (dirPath2, { directoryFilter: directoryFilter2, entryFilter: entryFilter2, parentPath = "", depth = 1 }) {
          for await (const listEntry of __privateMethod(this, _Hfs_instances, callImplMethodWithoutLog_fn).call(this, "list", dirPath2)) {
            const walkEntry = {
              path: listEntry.name,
              depth,
              ...listEntry
            };
            if (parentPath) {
              walkEntry.path = `${parentPath}/${walkEntry.path}`;
            }
            let shouldEmitEntry = entryFilter2(walkEntry);
            if (shouldEmitEntry.then) {
              shouldEmitEntry = await shouldEmitEntry;
            }
            if (shouldEmitEntry) {
              yield walkEntry;
            }
            if (listEntry.isDirectory) {
              let shouldWalkDirectory = directoryFilter2(walkEntry);
              if (shouldWalkDirectory.then) {
                shouldWalkDirectory = await shouldWalkDirectory;
              }
              if (!shouldWalkDirectory) {
                continue;
              }
              const directoryPath = dirPath2 instanceof URL ? new URL(
                listEntry.name,
                dirPath2.href.endsWith("/") ? dirPath2.href : `${dirPath2.href}/`
              ) : `${dirPath2.endsWith("/") ? dirPath2 : `${dirPath2}/`}${listEntry.name}`;
              yield* walk(directoryPath, {
                directoryFilter: directoryFilter2,
                entryFilter: entryFilter2,
                parentPath: walkEntry.path,
                depth: depth + 1
              });
            }
          }
        }).bind(this);
        yield* walk(dirPath, { directoryFilter, entryFilter });
      }
      /**
       * Returns the size of the given file.
       * @param {string|URL} filePath The path to the file to read.
       * @returns {Promise<number>} A promise that resolves with the size of the file.
       * @throws {TypeError} If the file path is not a string or URL.
       * @throws {Error} If the file cannot be read.
       */
      async size(filePath) {
        assertValidFileOrDirPath(filePath);
        return __privateMethod(this, _Hfs_instances, callImplMethod_fn).call(this, "size", filePath);
      }
      /**
       * Returns the last modified timestamp of the given file or directory.
       * @param {string|URL} fileOrDirPath The path to the file or directory.
       * @returns {Promise<Date|undefined>} A promise that resolves with the last modified date
       *  or undefined if the file or directory does not exist.
       * @throws {TypeError} If the path is not a string or URL.
       */
      async lastModified(fileOrDirPath) {
        assertValidFileOrDirPath(fileOrDirPath);
        return __privateMethod(this, _Hfs_instances, callImplMethod_fn).call(this, "lastModified", fileOrDirPath);
      }
      /**
       * Copys a file from one location to another.
       * @param {string|URL} source The path to the file to copy.
       * @param {string|URL} destination The path to the new file.
       * @returns {Promise<void>} A promise that resolves when the file is copied.
       * @throws {TypeError} If the file path is not a string or URL.
       * @throws {Error} If the file cannot be copied.
       */
      async copy(source, destination) {
        assertValidFileOrDirPath(source);
        assertValidFileOrDirPath(destination);
        return __privateMethod(this, _Hfs_instances, callImplMethod_fn).call(this, "copy", source, destination);
      }
      /**
       * Copies a file or directory from one location to another.
       * @param {string|URL} source The path to the file or directory to copy.
       * @param {string|URL} destination The path to copy the file or directory to.
       * @returns {Promise<void>} A promise that resolves when the file or directory is
       * copied.
       * @throws {TypeError} If the directory path is not a string or URL.
       * @throws {Error} If the directory cannot be copied.
       */
      async copyAll(source, destination) {
        assertValidFileOrDirPath(source);
        assertValidFileOrDirPath(destination);
        return __privateMethod(this, _Hfs_instances, callImplMethod_fn).call(this, "copyAll", source, destination);
      }
      /**
       * Moves a file from the source path to the destination path.
       * @param {string|URL} source The location of the file to move.
       * @param {string|URL} destination The destination of the file to move.
       * @returns {Promise<void>} A promise that resolves when the move is complete.
       * @throws {TypeError} If the file or directory paths are not strings.
       * @throws {Error} If the file or directory cannot be moved.
       */
      async move(source, destination) {
        assertValidFileOrDirPath(source);
        assertValidFileOrDirPath(destination);
        return __privateMethod(this, _Hfs_instances, callImplMethod_fn).call(this, "move", source, destination);
      }
      /**
       * Moves a file or directory from one location to another.
       * @param {string|URL} source The path to the file or directory to move.
       * @param {string|URL} destination The path to move the file or directory to.
       * @returns {Promise<void>} A promise that resolves when the file or directory is
       * moved.
       * @throws {TypeError} If the source is not a string or URL.
       * @throws {TypeError} If the destination is not a string or URL.
       * @throws {Error} If the file or directory cannot be moved.
       */
      async moveAll(source, destination) {
        assertValidFileOrDirPath(source);
        assertValidFileOrDirPath(destination);
        return __privateMethod(this, _Hfs_instances, callImplMethod_fn).call(this, "moveAll", source, destination);
      }
    };
    _baseImpl = new WeakMap();
    _impl = new WeakMap();
    _logs = new WeakMap();
    _Hfs_instances = new WeakSet();
    /**
     * Logs an entry onto all currently open logs.
     * @param {string} methodName The name of the method being called.
     * @param {...*} args The arguments to the method.
     * @returns {void}
     */
    log_fn = function(methodName, ...args) {
      for (const logs of __privateGet(this, _logs).values()) {
        logs.push(new LogEntry("call", { methodName, args }));
      }
    };
    /**
     * Asserts that the given method exists on the current implementation.
     * @param {string} methodName The name of the method to check.
     * @returns {void}
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     */
    assertImplMethod_fn = function(methodName) {
      if (typeof __privateGet(this, _impl)[methodName] !== "function") {
        throw new NoSuchMethodError(methodName);
      }
    };
    /**
     * Asserts that the given method exists on the current implementation, and if not,
     * throws an error with a different method name.
     * @param {string} methodName The name of the method to check.
     * @param {string} targetMethodName The name of the method that should be reported
     *  as an error when methodName does not exist.
     * @returns {void}
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     */
    assertImplMethodAlt_fn = function(methodName, targetMethodName) {
      if (typeof __privateGet(this, _impl)[methodName] !== "function") {
        throw new MethodNotSupportedError(targetMethodName);
      }
    };
    /**
     * Calls the given method on the current implementation.
     * @param {string} methodName The name of the method to call.
     * @param {...any} args The arguments to the method.
     * @returns {any} The return value from the method.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     */
    callImplMethod_fn = function(methodName, ...args) {
      __privateMethod(this, _Hfs_instances, log_fn).call(this, methodName, ...args);
      __privateMethod(this, _Hfs_instances, assertImplMethod_fn).call(this, methodName);
      return __privateGet(this, _impl)[methodName](...args);
    };
    /**
     * Calls the given method on the current implementation and doesn't log the call.
     * @param {string} methodName The name of the method to call.
     * @param {...any} args The arguments to the method.
     * @returns {any} The return value from the method.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     */
    callImplMethodWithoutLog_fn = function(methodName, ...args) {
      __privateMethod(this, _Hfs_instances, assertImplMethod_fn).call(this, methodName);
      return __privateGet(this, _impl)[methodName](...args);
    };
    /**
     * Calls the given method on the current implementation but logs a different method name.
     * @param {string} methodName The name of the method to call.
     * @param {string} targetMethodName The name of the method to log.
     * @param {...any} args The arguments to the method.
     * @returns {any} The return value from the method.
     * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
     */
    callImplMethodAlt_fn = function(methodName, targetMethodName, ...args) {
      __privateMethod(this, _Hfs_instances, log_fn).call(this, targetMethodName, ...args);
      __privateMethod(this, _Hfs_instances, assertImplMethodAlt_fn).call(this, methodName, targetMethodName);
      return __privateGet(this, _impl)[methodName](...args);
    };
  }
});

// node_modules/@humanfs/core/src/path.js
var init_path = __esm({
  "node_modules/@humanfs/core/src/path.js"() {
  }
});

// node_modules/@humanfs/core/src/errors.js
var init_errors = __esm({
  "node_modules/@humanfs/core/src/errors.js"() {
  }
});

// node_modules/@humanfs/core/src/index.js
var init_src = __esm({
  "node_modules/@humanfs/core/src/index.js"() {
    init_hfs();
    init_path();
    init_errors();
  }
});

// node_modules/@humanwhocodes/retry/dist/retrier.js
function isTimeToRetry(task, maxDelay) {
  const timeSinceLastAttempt = Date.now() - task.lastAttempt;
  const timeSinceStart = Math.max(task.lastAttempt - task.timestamp, 1);
  const desiredDelay = Math.min(timeSinceStart * 1.2, maxDelay);
  return timeSinceLastAttempt >= desiredDelay;
}
function isTimeToBail(task, timeout) {
  return task.age > timeout;
}
var MAX_TASK_TIMEOUT, MAX_TASK_DELAY, RetryTask, _queue, _timeout, _maxDelay, _timerId, _check, _Retrier_instances, processQueue_fn, Retrier;
var init_retrier = __esm({
  "node_modules/@humanwhocodes/retry/dist/retrier.js"() {
    MAX_TASK_TIMEOUT = 6e4;
    MAX_TASK_DELAY = 100;
    RetryTask = class {
      /**
       * Creates a new instance.
       * @param {Function} fn The function to call.
       * @param {Error} error The error that was thrown.
       * @param {Function} resolve The resolve function for the promise.
       * @param {Function} reject The reject function for the promise.
       * @param {AbortSignal|undefined} signal The AbortSignal to monitor for cancellation.
       */
      constructor(fn, error, resolve, reject, signal) {
        /**
         * The unique ID for the task.
         * @type {string}
         */
        __publicField(this, "id", Math.random().toString(36).slice(2));
        /**
         * The function to call.
         * @type {Function}
         */
        __publicField(this, "fn");
        /**
         * The error that was thrown.
         * @type {Error}
         */
        __publicField(this, "error");
        /**
         * The timestamp of the task.
         * @type {number}
         */
        __publicField(this, "timestamp", Date.now());
        /**
         * The timestamp of the last attempt.
         * @type {number}
         */
        __publicField(this, "lastAttempt", this.timestamp);
        /**
         * The resolve function for the promise.
         * @type {Function}
         */
        __publicField(this, "resolve");
        /**
         * The reject function for the promise.
         * @type {Function}
         */
        __publicField(this, "reject");
        /**
         * The AbortSignal to monitor for cancellation.
         * @type {AbortSignal|undefined}
         */
        __publicField(this, "signal");
        this.fn = fn;
        this.error = error;
        this.timestamp = Date.now();
        this.lastAttempt = Date.now();
        this.resolve = resolve;
        this.reject = reject;
        this.signal = signal;
      }
      /**
       * Gets the age of the task.
       * @returns {number} The age of the task in milliseconds.
       * @readonly
       */
      get age() {
        return Date.now() - this.timestamp;
      }
    };
    Retrier = class {
      /**
       * Creates a new instance.
       * @param {Function} check The function to call.
       * @param {object} [options] The options for the instance.
       * @param {number} [options.timeout] The timeout for the queue.
       * @param {number} [options.maxDelay] The maximum delay for the queue.
       */
      constructor(check, { timeout = MAX_TASK_TIMEOUT, maxDelay = MAX_TASK_DELAY } = {}) {
        __privateAdd(this, _Retrier_instances);
        /**
         * Represents the queue for processing tasks.
         * @type {Array<RetryTask>}
         */
        __privateAdd(this, _queue, []);
        /**
         * The timeout for the queue.
         * @type {number}
         */
        __privateAdd(this, _timeout);
        /**
         * The maximum delay for the queue.
         * @type {number}
         */
        __privateAdd(this, _maxDelay);
        /**
         * The setTimeout() timer ID.
         * @type {NodeJS.Timeout|undefined}
         */
        __privateAdd(this, _timerId);
        /**
         * The function to call.
         * @type {Function}
         */
        __privateAdd(this, _check);
        if (typeof check !== "function") {
          throw new Error("Missing function to check errors");
        }
        __privateSet(this, _check, check);
        __privateSet(this, _timeout, timeout);
        __privateSet(this, _maxDelay, maxDelay);
      }
      /**
       * Adds a new retry job to the queue.
       * @param {Function} fn The function to call.
       * @param {object} [options] The options for the job.
       * @param {AbortSignal} [options.signal] The AbortSignal to monitor for cancellation.
       * @returns {Promise<any>} A promise that resolves when the queue is
       *  processed.
       */
      retry(fn, { signal } = {}) {
        signal == null ? void 0 : signal.throwIfAborted();
        let result;
        try {
          result = fn();
        } catch (error) {
          return Promise.reject(new Error(`Synchronous error: ${error.message}`, { cause: error }));
        }
        if (!result || typeof result.then !== "function") {
          return Promise.reject(new Error("Result is not a promise."));
        }
        return Promise.resolve(result).catch((error) => {
          if (!__privateGet(this, _check).call(this, error)) {
            throw error;
          }
          return new Promise((resolve, reject) => {
            __privateGet(this, _queue).push(new RetryTask(fn, error, resolve, reject, signal));
            signal == null ? void 0 : signal.addEventListener("abort", () => {
              reject(signal.reason);
            });
            __privateMethod(this, _Retrier_instances, processQueue_fn).call(this);
          });
        });
      }
    };
    _queue = new WeakMap();
    _timeout = new WeakMap();
    _maxDelay = new WeakMap();
    _timerId = new WeakMap();
    _check = new WeakMap();
    _Retrier_instances = new WeakSet();
    /**
     * Processes the queue.
     * @returns {void}
     */
    processQueue_fn = function() {
      clearTimeout(__privateGet(this, _timerId));
      __privateSet(this, _timerId, void 0);
      const task = __privateGet(this, _queue).shift();
      if (!task) {
        return;
      }
      const processAgain = () => {
        __privateSet(this, _timerId, setTimeout(() => __privateMethod(this, _Retrier_instances, processQueue_fn).call(this), 0));
      };
      if (isTimeToBail(task, __privateGet(this, _timeout))) {
        task.reject(task.error);
        processAgain();
        return;
      }
      if (!isTimeToRetry(task, __privateGet(this, _maxDelay))) {
        __privateGet(this, _queue).push(task);
        processAgain();
        return;
      }
      task.lastAttempt = Date.now();
      Promise.resolve(task.fn()).then((result) => task.resolve(result)).catch((error) => {
        if (!__privateGet(this, _check).call(this, error)) {
          task.reject(error);
          return;
        }
        task.lastAttempt = Date.now();
        __privateGet(this, _queue).push(task);
      }).finally(() => __privateMethod(this, _Retrier_instances, processQueue_fn).call(this));
    };
  }
});

// node_modules/@humanfs/node/src/node-hfs.js
var import_node_path, import_promises, import_node_url, RETRY_ERROR_CODES, NodeHfsDirectoryEntry, _fsp, _retrier, NodeHfsImpl, NodeHfs, hfs;
var init_node_hfs = __esm({
  "node_modules/@humanfs/node/src/node-hfs.js"() {
    init_src();
    import_node_path = __toESM(require_node_path(), 1);
    init_retrier();
    import_promises = __toESM(require_promises(), 1);
    import_node_url = __toESM(require_node_url(), 1);
    RETRY_ERROR_CODES = /* @__PURE__ */ new Set(["ENFILE", "EMFILE"]);
    NodeHfsDirectoryEntry = class {
      /**
       * Creates a new instance.
       * @param {Dirent} dirent The directory entry to wrap.
       */
      constructor(dirent) {
        /**
         * The name of the directory entry.
         * @type {string}
         */
        __publicField(this, "name");
        /**
         * True if the entry is a file.
         * @type {boolean}
         */
        __publicField(this, "isFile");
        /**
         * True if the entry is a directory.
         * @type {boolean}
         */
        __publicField(this, "isDirectory");
        /**
         * True if the entry is a symbolic link.
         * @type {boolean}
         */
        __publicField(this, "isSymlink");
        this.name = dirent.name;
        this.isFile = dirent.isFile();
        this.isDirectory = dirent.isDirectory();
        this.isSymlink = dirent.isSymbolicLink();
      }
    };
    NodeHfsImpl = class {
      /**
       * Creates a new instance.
       * @param {object} [options] The options for the instance.
       * @param {Fsp} [options.fsp] The file system module to use.
       */
      constructor({ fsp = import_promises.default } = {}) {
        /**
         * The file system module to use.
         * @type {Fsp}
         */
        __privateAdd(this, _fsp);
        /**
         * The retryer object used for retrying operations.
         * @type {Retrier}
         */
        __privateAdd(this, _retrier);
        __privateSet(this, _fsp, fsp);
        __privateSet(this, _retrier, new Retrier((error) => RETRY_ERROR_CODES.has(error.code)));
      }
      /**
       * Reads a file and returns the contents as an Uint8Array.
       * @param {string|URL} filePath The path to the file to read.
       * @returns {Promise<Uint8Array|undefined>} A promise that resolves with the contents
       *    of the file or undefined if the file doesn't exist.
       * @throws {Error} If the file cannot be read.
       * @throws {TypeError} If the file path is not a string.
       */
      bytes(filePath) {
        return __privateGet(this, _retrier).retry(() => __privateGet(this, _fsp).readFile(filePath)).then((buffer) => new Uint8Array(buffer.buffer)).catch((error) => {
          if (error.code === "ENOENT") {
            return void 0;
          }
          throw error;
        });
      }
      /**
       * Writes a value to a file. If the value is a string, UTF-8 encoding is used.
       * @param {string|URL} filePath The path to the file to write.
       * @param {Uint8Array} contents The contents to write to the
       *   file.
       * @returns {Promise<void>} A promise that resolves when the file is
       *  written.
       * @throws {TypeError} If the file path is not a string.
       * @throws {Error} If the file cannot be written.
       */
      async write(filePath, contents) {
        const value = Buffer.from(contents);
        return __privateGet(this, _retrier).retry(() => __privateGet(this, _fsp).writeFile(filePath, value)).catch((error) => {
          if (error.code === "ENOENT") {
            const dirPath = import_node_path.default.dirname(
              filePath instanceof URL ? (0, import_node_url.fileURLToPath)(filePath) : filePath
            );
            return __privateGet(this, _fsp).mkdir(dirPath, { recursive: true }).then(() => __privateGet(this, _fsp).writeFile(filePath, value));
          }
          throw error;
        });
      }
      /**
       * Appends a value to a file. If the value is a string, UTF-8 encoding is used.
       * @param {string|URL} filePath The path to the file to append to.
       * @param {Uint8Array} contents The contents to append to the
       *  file.
       * @returns {Promise<void>} A promise that resolves when the file is
       * written.
       * @throws {TypeError} If the file path is not a string.
       * @throws {Error} If the file cannot be appended to.
       */
      async append(filePath, contents) {
        const value = Buffer.from(contents);
        return __privateGet(this, _retrier).retry(() => __privateGet(this, _fsp).appendFile(filePath, value)).catch((error) => {
          if (error.code === "ENOENT") {
            const dirPath = import_node_path.default.dirname(
              filePath instanceof URL ? (0, import_node_url.fileURLToPath)(filePath) : filePath
            );
            return __privateGet(this, _fsp).mkdir(dirPath, { recursive: true }).then(() => __privateGet(this, _fsp).appendFile(filePath, value));
          }
          throw error;
        });
      }
      /**
       * Checks if a file exists.
       * @param {string|URL} filePath The path to the file to check.
       * @returns {Promise<boolean>} A promise that resolves with true if the
       *    file exists or false if it does not.
       * @throws {Error} If the operation fails with a code other than ENOENT.
       */
      isFile(filePath) {
        return __privateGet(this, _fsp).stat(filePath).then((stat) => stat.isFile()).catch((error) => {
          if (error.code === "ENOENT") {
            return false;
          }
          throw error;
        });
      }
      /**
       * Checks if a directory exists.
       * @param {string|URL} dirPath The path to the directory to check.
       * @returns {Promise<boolean>} A promise that resolves with true if the
       *    directory exists or false if it does not.
       * @throws {Error} If the operation fails with a code other than ENOENT.
       */
      isDirectory(dirPath) {
        return __privateGet(this, _fsp).stat(dirPath).then((stat) => stat.isDirectory()).catch((error) => {
          if (error.code === "ENOENT") {
            return false;
          }
          throw error;
        });
      }
      /**
       * Creates a directory recursively.
       * @param {string|URL} dirPath The path to the directory to create.
       * @returns {Promise<void>} A promise that resolves when the directory is
       *   created.
       */
      async createDirectory(dirPath) {
        await __privateGet(this, _fsp).mkdir(dirPath, { recursive: true });
      }
      /**
       * Deletes a file or empty directory.
       * @param {string|URL} fileOrDirPath The path to the file or directory to
       *   delete.
       * @returns {Promise<boolean>} A promise that resolves when the file or
       *   directory is deleted, true if the file or directory is deleted, false
       *   if the file or directory does not exist.
       * @throws {TypeError} If the file or directory path is not a string.
       * @throws {Error} If the file or directory cannot be deleted.
       */
      delete(fileOrDirPath) {
        return __privateGet(this, _fsp).rm(fileOrDirPath).then(() => true).catch((error) => {
          if (error.code === "ERR_FS_EISDIR") {
            return __privateGet(this, _fsp).rmdir(fileOrDirPath).then(() => true);
          }
          if (error.code === "ENOENT") {
            return false;
          }
          throw error;
        });
      }
      /**
       * Deletes a file or directory recursively.
       * @param {string|URL} fileOrDirPath The path to the file or directory to
       *   delete.
       * @returns {Promise<boolean>} A promise that resolves when the file or
       *   directory is deleted, true if the file or directory is deleted, false
       *   if the file or directory does not exist.
       * @throws {TypeError} If the file or directory path is not a string.
       * @throws {Error} If the file or directory cannot be deleted.
       */
      deleteAll(fileOrDirPath) {
        return __privateGet(this, _fsp).rm(fileOrDirPath, { recursive: true }).then(() => true).catch((error) => {
          if (error.code === "ENOENT") {
            return false;
          }
          throw error;
        });
      }
      /**
       * Returns a list of directory entries for the given path.
       * @param {string|URL} dirPath The path to the directory to read.
       * @returns {AsyncIterable<HfsDirectoryEntry>} A promise that resolves with the
       *   directory entries.
       * @throws {TypeError} If the directory path is not a string.
       * @throws {Error} If the directory cannot be read.
       */
      async *list(dirPath) {
        const entries = await __privateGet(this, _fsp).readdir(dirPath, {
          withFileTypes: true
        });
        for (const entry of entries) {
          yield new NodeHfsDirectoryEntry(entry);
        }
      }
      /**
       * Returns the size of a file. This method handles ENOENT errors
       * and returns undefined in that case.
       * @param {string|URL} filePath The path to the file to read.
       * @returns {Promise<number|undefined>} A promise that resolves with the size of the
       *  file in bytes or undefined if the file doesn't exist.
       */
      size(filePath) {
        return __privateGet(this, _fsp).stat(filePath).then((stat) => stat.size).catch((error) => {
          if (error.code === "ENOENT") {
            return void 0;
          }
          throw error;
        });
      }
      /**
       * Returns the last modified date of a file or directory. This method handles ENOENT errors
       * and returns undefined in that case.
       * @param {string|URL} fileOrDirPath The path to the file to read.
       * @returns {Promise<Date|undefined>} A promise that resolves with the last modified
       * date of the file or directory, or undefined if the file doesn't exist.
       */
      lastModified(fileOrDirPath) {
        return __privateGet(this, _fsp).stat(fileOrDirPath).then((stat) => stat.mtime).catch((error) => {
          if (error.code === "ENOENT") {
            return void 0;
          }
          throw error;
        });
      }
      /**
       * Copies a file from one location to another.
       * @param {string|URL} source The path to the file to copy.
       * @param {string|URL} destination The path to copy the file to.
       * @returns {Promise<void>} A promise that resolves when the file is copied.
       * @throws {Error} If the source file does not exist.
       * @throws {Error} If the source file is a directory.
       * @throws {Error} If the destination file is a directory.
       */
      copy(source, destination) {
        return __privateGet(this, _fsp).copyFile(source, destination);
      }
      /**
       * Copies a file or directory from one location to another.
       * @param {string|URL} source The path to the file or directory to copy.
       * @param {string|URL} destination The path to copy the file or directory to.
       * @returns {Promise<void>} A promise that resolves when the file or directory is
       * copied.
       * @throws {Error} If the source file or directory does not exist.
       * @throws {Error} If the destination file or directory is a directory.
       */
      async copyAll(source, destination) {
        if (await this.isFile(source)) {
          return this.copy(source, destination);
        }
        const sourceStr = source instanceof URL ? (0, import_node_url.fileURLToPath)(source) : source;
        const destinationStr = destination instanceof URL ? (0, import_node_url.fileURLToPath)(destination) : destination;
        await this.createDirectory(destination);
        for await (const entry of this.list(source)) {
          const fromEntryPath = import_node_path.default.join(sourceStr, entry.name);
          const toEntryPath = import_node_path.default.join(destinationStr, entry.name);
          if (entry.isDirectory) {
            await this.copyAll(fromEntryPath, toEntryPath);
          } else {
            await this.copy(fromEntryPath, toEntryPath);
          }
        }
      }
      /**
       * Moves a file from the source path to the destination path.
       * @param {string|URL} source The location of the file to move.
       * @param {string|URL} destination The destination of the file to move.
       * @returns {Promise<void>} A promise that resolves when the move is complete.
       * @throws {TypeError} If the file paths are not strings.
       * @throws {Error} If the file cannot be moved.
       */
      move(source, destination) {
        return __privateGet(this, _fsp).stat(source).then((stat) => {
          if (stat.isDirectory()) {
            throw new Error(
              `EISDIR: illegal operation on a directory, move '${source}' -> '${destination}'`
            );
          }
          return __privateGet(this, _fsp).rename(source, destination);
        });
      }
      /**
       * Moves a file or directory from the source path to the destination path.
       * @param {string|URL} source The location of the file or directory to move.
       * @param {string|URL} destination The destination of the file or directory to move.
       * @returns {Promise<void>} A promise that resolves when the move is complete.
       * @throws {TypeError} If the file paths are not strings.
       * @throws {Error} If the file or directory cannot be moved.
       */
      async moveAll(source, destination) {
        return __privateGet(this, _fsp).rename(source, destination);
      }
    };
    _fsp = new WeakMap();
    _retrier = new WeakMap();
    NodeHfs = class extends Hfs {
      /**
       * Creates a new instance.
       * @param {object} [options] The options for the instance.
       * @param {Fsp} [options.fsp] The file system module to use.
       */
      constructor({ fsp } = {}) {
        super({ impl: new NodeHfsImpl({ fsp }) });
      }
    };
    hfs = new NodeHfs();
  }
});

// node_modules/@humanfs/node/src/index.js
var init_src2 = __esm({
  "node_modules/@humanfs/node/src/index.js"() {
    init_node_hfs();
    init_src();
  }
});
init_src2();
export {
  Hfs,
  NodeHfs,
  NodeHfsImpl,
  hfs
};
//# sourceMappingURL=src-OHC5EWA2.js.map