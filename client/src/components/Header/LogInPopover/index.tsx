import React, {FC, useEffect, useRef, useState} from 'react';
import {Button} from 'react-bootstrap';
import {usePopper} from 'react-popper';
import {CSSTransition} from 'react-transition-group';
import LogInForm from './LogInForm';
import classes from './LogInPopover.module.scss';

const LogInPopover: FC = () => {
  const popupBox = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(prevState => !prevState);

  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const {styles, attributes} = usePopper(referenceElement, popperElement, {
    modifiers: [{name: 'arrow', options: {element: arrowElement}}],
    placement: 'bottom'
  });

  useEffect(() => {
    function clickOutsideHandler(event: MouseEvent) {
      if (popupBox.current && !event.composedPath().includes(popupBox.current)) {
        setIsOpen(false);
      }
    }
    document.body.addEventListener('click', clickOutsideHandler);
    return () => document.body.removeEventListener('click', clickOutsideHandler);
  }, []);

  return (
    <div ref={popupBox}>
      <Button
        variant="primary"
        className="ms-2"
        ref={setReferenceElement}
        onClick={toggleIsOpen}
        type="button"
      >
        Log In
      </Button>

      <CSSTransition in={isOpen} timeout={600} mountOnEnter unmountOnExit classNames={{
        enter: classes.popupEnter,
        enterActive: classes.popupEnterActive,
        exit: classes.popupExit,
        exitActive: classes.popupExitActive
      }}>
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <div
            ref={setArrowElement}
            style={styles.arrow}
            className={classes.arrow}
          />
          <LogInForm/>
        </div>
      </CSSTransition>
    </div>
  );
};

export default LogInPopover;
