import React, {FC, PropsWithChildren, useEffect, useRef, useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import {CSSTransitionClassNames} from 'react-transition-group/CSSTransition';
import classes from '../../pages/HomePage/HomePage.module.scss';

interface OutgoingBlockProps extends PropsWithChildren {
  classNames: string | CSSTransitionClassNames | undefined;
}

const OutgoingBlock: FC<OutgoingBlockProps> = ({children, classNames}) => {
  const observer = useRef<null | IntersectionObserver>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setShow(true);
    });
    observer.current?.observe(wrapperRef.current!);
  }, []);

  return (
    <CSSTransition in={show} timeout={1000} classNames={classNames}>
      <div className={classes.block} ref={wrapperRef}>
        {children}
      </div>
    </CSSTransition>
  );
};

export default OutgoingBlock;
