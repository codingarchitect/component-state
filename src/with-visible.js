import React from 'react';
import { setObservableConfig, mapPropsStream, createEventHandler } from 'recompose';
import { Observable } from 'rxjs';

setObservableConfig({
  fromESObservable: Observable.from
})

const withVisible = mapPropsStream(props$ => {
  const { handler: show, stream: show$ } = createEventHandler()
  const { handler: hide, stream: hide$ } = createEventHandler()
  const visible$ = Observable.merge(
      show$.mapTo(true),
      hide$.mapTo(false),
      props$.pluck(['visible']),
    )
    .startWith(false)
  return props$.combineLatest(
      visible$,
      (props, visible) => ({ ...props, visible, show, hide })
    )
})

export default withVisible;
