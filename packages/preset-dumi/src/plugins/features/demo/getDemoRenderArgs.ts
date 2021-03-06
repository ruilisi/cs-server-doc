import React, { ComponentProps, ReactNode } from 'react';
import { IRouteComponentProps } from '@umijs/types';
// @ts-ignore
import demos from '@@/dumi/demos';

type IGetDemoRenderArgs = [ComponentProps<any>, ReactNode] | [ReactNode] | [];

/**
 * return demo preview arguments for single page route
 * @return [props, children] or [children]
 */
export default (
  props: IRouteComponentProps<{ uuid: string }, { wrapper?: string; capture?: string }>,
): IGetDemoRenderArgs => {
  let result = [] as IGetDemoRenderArgs;
  const uuid = props.match.params.uuid;
  const inline = props.location.query.wrapper === undefined;
  const demo = demos[uuid];

  if (demo) {
    const previewerProps = {
      ...demo.previewerProps,
      // disallowed matryoshka
      hideActions: (demo.previewerProps.hideActions || []).concat(['EXTERNAL']),
    };

    if (props.location.query.capture !== undefined) {
      // unchain refer
      previewerProps.motions = (previewerProps.motions || []).slice();

      // unshift autoplay motion
      previewerProps.motions.unshift('autoplay');

      // append capture motion if not exist
      if (previewerProps.motions.every(motion => !motion.startsWith('capture'))) {
        // compatible with qiankun app
        previewerProps.motions.push('capture:[id|=root]');
      }
    }

    if (inline) {
      // return demo component with motions handler
      result = [
        React.createElement(() => {
          require('dumi/theme').useMotions(previewerProps.motions || [], document);

          return React.createElement('div', {}, React.createElement(demo.component));
        }),
      ];
    } else {
      // return demo component with previewer props, for render demo via Previewer.tsx in theme
      result = [previewerProps, React.createElement(demo.component)];
    }
  }

  return result;
};
