/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface AnimatorOptions {
  /**
   * Duration of the animation, in milliseconds.
   * The default value is 0.
   */
  duration: number;

  /**
   * Time curve of the animation. For details about the supported types.
   * linear The animation speed keeps unchanged.
   * ease The animation starts and ends at a low speed, cubic-bezier(0.25, 0.1, 0.25, 1.0).
   * ease-in The animation starts at a low speed, cubic-bezier(0.42, 0.0, 1.0, 1.0).
   * ease-out The animation ends at a low speed, cubic-bezier(0.0, 0.0, 0.58, 1.0).
   * ease-in-out The animation starts and ends at a low speed, cubic-bezier(0.42, 0.0, 0.58, 1.0).
   * fast-out-slow-in Standard curve, cubic-bezier(0.4, 0.0, 0.2, 1.0).
   * linear-out-slow-in Deceleration curve, cubic-bezier(0.0, 0.0, 0.2, 1.0).
   * fast-out-linear-in Acceleration curve, cubic-bezier(0.4, 0.0, 1.0, 1.0).
   * friction Damping curve, cubic-bezier(0.2, 0.0, 0.2, 1.0).
   * extreme-deceleration Extreme deceleration curve, cubic-bezier(0.0, 0.0, 0.0, 1.0).
   * sharp Sharp curve, cubic-bezier(0.33, 0.0, 0.67, 1.0).
   * rhythm Rhythm curve, cubic-bezier(0.7, 0.0, 0.2, 1.0).
   * smooth Smooth curve, cubic-bezier(0.4, 0.0, 0.4, 1.0).
   * cubic-bezier(x1, y1, x2, y2) You can customize an animation speed curve in the cubic-bezier() function. The x and y values of each input parameter must be between 0 and 1.
   * Step curve. The number must be set and only an integer is supported, step-position is optional. It can be set to start or end. The default value is end.
   * The default value is ease.
   */
  easing: string;

  /**
   * Delay for the animation start. The default value indicates no delay.
   * The default value is 0.
   */
  delay: number;

  /**
   * Whether to resume to the initial state after the animation is executed.
   * none: The initial state is restored after the animation is executed.
   * forwards: The state at the end of the animation (defined in the last key frame) is retained after the animation is executed.
   */
  fill: "none" | "forwards" | "backwards" | "both";

  /**
   * The animation playback mode.
   * The default value is "normal".
   */
  direction: "normal" | "reverse" | "alternate" | "alternate-reverse";

  /**
   * Number of times the animation will be played. number indicates a fixed number of playback operations, and -1 an unlimited number of playback operations.
   * The default value is 1.
   */
  iterations: number;

  /**
   * Starting point of animator interpolation.
   * The default value is 0.
   */
  begin: number;

  /**
   * Ending point of Dynamic Interpolation
   * The default value is 1.
   */
  end: number;
}

export interface AnimatorResult {
  /**
   * Update the options for current animator.
   * @param options Options.
   */
  update(options: AnimatorOptions): void;
  /**
   * Starts the animation.
   */
  play(): void;
  /**
   * Ends the animation.
   */
  finish(): void;
  /**
   * Pauses the animation.
   */
  pause(): void;
  /**
   * Cancels the animation.
   */
  cancel(): void;
  /**
   * Plays the animation in reverse direction.
   */
  reverse(): void;
  /**
   * Trigger when vsync callback.
   * @param progress The current progress of animtion
   */
  onframe: (progress: number) => void;
  /**
   * The animation is finished.
   */
  onfinish: () => void;
  /**
   * The animation is canceled.
   */
  oncancel: () => void;
  /**
   * The animation is repeated.
   */
  onrepeat: () => void;
}

export default class Animator {
  /**
   * Create an animator object for custum animation.
   * @param options Options.
   */
  static createAnimator(options: AnimatorOptions): AnimatorResult;
}
