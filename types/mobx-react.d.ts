export class Observer {
  static contextTypes: any;
  static defaultProps: any;
  static displayName: string;
  static isMobXReactObserver: boolean;
  constructor(...args: any[]);
  componentDidMount(): void;
  componentDidUpdate(): void;
  componentWillUnmount(): void;
  forceUpdate(callback: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
  shouldComponentUpdate(nextProps: any, nextState: any): any;
}
export namespace Observer {
  namespace propTypes {
    function children(props: any, key: any, componentName: any, location: any, propFullName: any): any;
    function render(props: any, key: any, componentName: any, location: any, propFullName: any): any;
  }
}
export namespace PropTypes {
  function arrayOrObservableArray(p0: any, p1: any, p2: any, p3: any, p4: any): any;
  namespace arrayOrObservableArray {
    function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any): any;
  }
  function arrayOrObservableArrayOf(p0: any): any;
  function objectOrObservableObject(p0: any, p1: any, p2: any, p3: any, p4: any): any;
  namespace objectOrObservableObject {
    function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any): any;
  }
  function observableArray(p0: any, p1: any, p2: any, p3: any, p4: any): any;
  namespace observableArray {
    function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any): any;
  }
  function observableArrayOf(p0: any): any;
  function observableMap(p0: any, p1: any, p2: any, p3: any, p4: any): any;
  namespace observableMap {
    function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any): any;
  }
  function observableObject(p0: any, p1: any, p2: any, p3: any, p4: any): any;
  namespace observableObject {
    function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any): any;
  }
}
export class Provider {
  static getDerivedStateFromProps(nextProps: any, prevState: any): any;
  constructor(props: any, context: any);
  componentWillMount(): void;
  componentWillReceiveProps(nextProps: any): void;
  forceUpdate(callback: any): void;
  getChildContext(): any;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace Provider {
  namespace childContextTypes {
    function mobxStores(p0: any, p1: any, p2: any, p3: any, p4: any): any;
  }
  namespace contextTypes {
    function mobxStores(p0: any, p1: any, p2: any, p3: any, p4: any): any;
    namespace mobxStores {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any): any;
    }
  }
}
export const componentByNodeRegistery: WeakMap;
export const componentByNodeRegistry: WeakMap;
export function inject(...args: any[]): any;
export function observer(arg1: any, arg2: any): any;
export function onError(fn: any): any;
export namespace propTypes {
  function arrayOrObservableArray(p0: any, p1: any, p2: any, p3: any, p4: any): any;
  namespace arrayOrObservableArray {
    function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any): any;
  }
  function arrayOrObservableArrayOf(p0: any): any;
  function objectOrObservableObject(p0: any, p1: any, p2: any, p3: any, p4: any): any;
  namespace objectOrObservableObject {
    function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any): any;
  }
  function observableArray(p0: any, p1: any, p2: any, p3: any, p4: any): any;
  namespace observableArray {
    function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any): any;
  }
  function observableArrayOf(p0: any): any;
  function observableMap(p0: any, p1: any, p2: any, p3: any, p4: any): any;
  namespace observableMap {
    function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any): any;
  }
  function observableObject(p0: any, p1: any, p2: any, p3: any, p4: any): any;
  namespace observableObject {
    function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any): any;
  }
}
export const renderReporter: {
  emit: Function;
  listeners: any[];
  on: Function;
};
export function trackComponents(): void;
export function useStaticRendering(useStaticRendering: any): void;
