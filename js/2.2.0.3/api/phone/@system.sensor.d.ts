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

export interface AccelerometerResponse {
  /**
   * X-coordinate
   * @since 3
   */
  x: number;

  /**
   * Y-coordinate
   * @since 3
   */
  y: number;

  /**
   * Z-coordinate
   * @since 3
   */
  z: number;
}

export interface CompassResponse {
  /**
   * Direction of the device (in degrees).
   * @since 3
   */
  direction: number;
}

export interface LightResponse {
  /**
   * Light intensity, in lux.
   * @since 3
   */
  intensity: number;
}

export interface StepCounterResponse {
  /**
   * Number of steps counted.
   * Each time the device restarts, the value is recalculated from 0.
   * @since 3
   */
  steps: number;
}

export interface BarometerResponse {
  /**
   * Pressure, in pascal.
   * @since 3
   */
  pressure: number;
}

export interface DeviceOrientationResponse {
  /**
   * alpha
   * @since 6
   */
  alpha: number;

  /**
   * beta
   * @since 6
   */
  beta: number;

  /**
   * gamma
   * @since 6
   */
  gamma: number;
}

export interface GyroscopeResponse {
  /**
   * X-coordinate
   * @since 6
   */
  x: number;

  /**
   * Y-coordinate
   * @since 6
   */
  y: number;

  /**
   * Z-coordinate
   * @since 6
   */
  z: number;
}

/**
 * @Syscap SysCap.ACE.UIEngine
 */
export default class Sensor {
  /**
   * Listens to acceleration sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options
   */
  static subscribeAccelerometer(options: {
    /**
     * Execution frequency of the callback function for listening to acceleration sensor data.
     * The default value is normal.
     * @since 3
     */
    interval: string;

    /**
     * Called when acceleration sensor data changes.
     * @since 3
     */
    success: (data: AccelerometerResponse) => void;

    /**
     * Called when the listening fails.
     * @since 3
     */
    fail?: (data: any, code: number) => void;
  }): void;

  /**
   * Cancels listening to acceleration sensor data.
   */
  static unsubscribeAccelerometer(): void;

  /**
   * Listens to compass sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options Options.
   */
  static subscribeCompass(options: {
    /**
     * Called when compass sensor data changes.
     * @since 3
     */
    success: (data: CompassResponse) => void;

    /**
     * Called when the listening fails.
     * @since 3
     */
    fail?: (data: any, code: number) => void;
  }): void;

  /**
   * Cancels listening to compass sensor data.
   */
  static unsubscribeCompass(): void;

  /**
   * Listens to distance sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options
   */
  static subscribeProximity(options: {
    /**
     * Called when distance sensor data changes.
     * @since 3
     */
    success: (ret: { distance: number}) => void;

    /**
     * Called when the listening fails.
     * @since 3
     */
    fail?: (data: any, code: number) => void;
  }): void;

  /**
   * Cancels listening to distance sensor data.
   * @param options
   */
  static unsubscribeProximity(): void;

  /**
   * Listens to ambient light sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options
   */
  static subscribeLight(options: {
    /**
     * Called when ambient light sensor data changes.
     * @since 3
     */
    success: (data: LightResponse) => void;

    /**
     * Called when the listening fails.
     * @since 3
     */
    fail?: (data: any, code: number) => void;
  }): void;

  /**
   * Cancels listening to ambient light sensor data.
   */
  static unsubscribeLight(): void;

  /**
   * Listens to step counter sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options
   */
  static subscribeStepCounter(options: {
    /**
     * Called when step counter sensor data changes.
     * @since 3
     */
    success: (data: StepCounterResponse) => void;

    /**
     * Called when the listening fails.
     * @since 3
     */
    fail?: (data: any, code: number) => void;
  }): void;

  /**
   * Cancels listening to step counter sensor data.
   */
  static unsubscribeStepCounter(): void;

  /**
   * Listens to barometer sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options
   */
  static subscribeBarometer(options: {
    /**
     * Called when the barometer sensor data changes.
     * @since 3
     */
    success: (data: BarometerResponse) => void;

    /**
     * Called when the listening fails.
     * @since 3
     */
    fail?: (data: any, code: number) => void;
  }): void;

  /**
   * Cancels listening to barometer sensor data.
   */
  static unsubscribeBarometer(): void;

  /**
   * Listens to device orientation sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options
   */
  static subscribeDeviceOrientation(options: {
    /**
     * Execution frequency of the callback function for listening to device orientation sensor data.
     * The default value is normal.
     * @since 6
     */
    interval: string;

    /**
     * Called when device orientation sensor data changes.
     * @since 6
     */
    success: (data: DeviceOrientationResponse) => void;

    /**
     * Called when the listening fails.
     * @since 6
     */
    fail?: (data: any, code: number) => void;
  }): void;

  /**
   * Cancels listening to device orientation sensor data.
   */
  static unsubscribeDeviceOrientation(): void;

  /**
   * Listens to gyroscope sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options
   */
  static subscribeGyroscope(options: {
    /**
     * Execution frequency of the callback function for listening to gyroscope sensor data.
     * The default value is normal.
     * @since 6
     */
    interval: string;

    /**
     * Called when gyroscope sensor data changes.
     * @since 6
     */
    success: (data: GyroscopeResponse) => void;

    /**
     * Called when the listening fails.
     * @since 6
     */
    fail?: (data: any, code: number) => void;
  }): void;

  /**
   * Cancels listening to gyroscope sensor data.
   */
  static unsubscribeGyroscope(): void;
}
