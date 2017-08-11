import React from 'react';
import { setObservableConfig, mapPropsStream, createEventHandler } from 'recompose';
import { Observable } from 'rxjs';
import _ from 'lodash';

setObservableConfig({
  fromESObservable: Observable.from
})

const withBooleanProp = (propName) => mapPropsStream(props$ => {
  const { handler: show, stream: show$ } = createEventHandler()
  const { handler: hide, stream: hide$ } = createEventHandler()
  const visible$ = Observable.merge(
      show$.mapTo(true),
      hide$.mapTo(false),
      props$.pluck([propName]),
    )
    .map((visible) => !!visible)
  return props$.combineLatest(
      visible$,
      (props, visible) => ({ 
        ...props, 
        [propName]: visible, 
        [`set${_.upperFirst(propName)}ToTrue`]: show, 
        [`set${_.upperFirst(propName)}ToFalse`]: hide 
      }),
    )
})

export default withBooleanProp;
