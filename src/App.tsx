import { Component } from "solid-js";
import Overlay from "./overlays/Overlay";
import { createSignal } from "solid-js";
import { Placement } from "./overlays/usePopper";
import styles from "./App.module.css";
import { Transition } from "solid-transition-group";

const PLACEMENTS: Placement[] = ["top", "right", "bottom", "left"];

const App: Component = () => {
  const [target, setTarget] = createSignal<HTMLElement>();
  const [container, setContainer] = createSignal<HTMLElement>();
  const [show, setShow] = createSignal(false);
  const [placement, setPlacement] = createSignal<Placement>();

  function handleClick() {
    if (!show()) {
      setPlacement("top");
      setShow(true);
    } else if (placement() === "left") {
      setShow(false);
    } else {
      setPlacement(PLACEMENTS[PLACEMENTS.indexOf(placement()!) + 1]);
    }
  }

  return (
    <div class="container" ref={setContainer}>
      <h1 class="display-4">Solid-Overlays</h1>
      <header>
        <h3>Overlay</h3>
        <p class="lead">
          A powerful and flexible overlay component for showing things over, and
          next to, other things.
        </p>
        <p>
          This example is styled to look like a tooltip (with an adaptive
          arrow). It also demonstates using an optional transition.
        </p>
        <p>Click the button to cycle through placement options.</p>
        <div class="d-flex justify-content-center">
          {/* Button is the overlay target to position around */}
          <button ref={setTarget} onclick={handleClick} class="btn btn-primary">
            I am an overlay target
          </button>
        </div>
        <Overlay
          container={container}
          target={target}
          show={show()}
          placement={placement()}
          offset={[0, 5]}
          flip
          transition={Transition}
          onEnter={(el, done) => {
            const a = el.animate([{ opacity: 0 }, { opacity: 1 }], {
              duration: 500,
            });
            a.finished.then(done);
          }}
          onExit={(el, done) => {
            const a = el.animate([{ opacity: 1 }, { opacity: 0 }], {
              duration: 500,
            });
            a.finished.then(done);
          }}
        >
          {/* Render overlay (tooltip) with props from popperjs */}
          {(props, more) => (
            <div class="tooltip bs-tooltip-auto show" {...props()}>
              <div class="tooltip-arrow" {...more().arrowProps}></div>
              <div class="tooltip-inner">I am a overlay!</div>
            </div>
          )}
        </Overlay>
      </header>
    </div>
  );
};

export default App;
