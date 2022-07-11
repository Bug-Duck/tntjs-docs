import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      message: 'Easy to Use',
      description: 'Title to section `Easy to use`.',
      id: 'homepageFeatures.easyToUse.title'
    }),
    Img: require('@site/static/img/sprints.png').default,
    description: (
      <Translate
        id="homepageFeatures.easyToUse.description"
        description="Description of TNT.js's easy to use."
      >
        Built with ease of use in mind, TNT.js was literally useable out of the box. However,
        with the power of plugins, TNT also enables you to complicated tasks.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Focus on What Matters',
      id: 'homepageFeatures.focusOnWhatMatters.title',
      description: 'Title to section `Focus on What Matters`.'
    }),
    Img: require('@site/static/img/support-team.png').default,
    description: (
      <Translate
        id="homepageFeatures.focusOnWhatMatters.description"
        description="Description about TNT.js lightweight and ease of use feature."
      >
        TNT.js is very lightweight designed but also very scalable at the same time. Developers will only
        have to focus on the core logic and TNT will handle the rest.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Dynamically update',
      id: 'homepageFeatures.dynamicallyUpdate.title',
      description: 'Title for section `Dynamically update`.'
    }),
    Img: require('@site/static/img/javascript-coding-language.png').default,
    description: (
      <Translate
        id="homepageFeatures.dynamicallyUpdate.description"
        description="Description about TNT.js dynamic variable update feature."
      >
        TNT.js will dynamically update rendering results according to the current variable states,
        making it easier to build modern websites.
      </Translate>
    ),
  },
];

function Feature({title, Img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
