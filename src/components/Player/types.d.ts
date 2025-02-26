export interface VideoJsOptions {
  // Standard <video> Element Options
  autoplay?: boolean | string
  controlBar?: {
    remainingTimeDisplay?: {
      displayNegative?: boolean
    }
  }
  controls?: boolean
  height?: string | number
  loop?: boolean
  muted?: boolean
  poster?: string
  preload?: 'auto' | 'metadata' | 'none'
  src?: string
  width?: string | number

  // Video.js-specific Options
  aspectRatio?: string
  audioOnlyMode?: boolean
  audioPosterMode?: boolean
  autoSetup?: boolean
  breakpoints?: {
    tiny?: number
    xsmall?: number
    small?: number
    medium?: number
    large?: number
    xlarge?: number
    huge?: number
  }
  children?: Array<any> | Object
  disablePictureInPicture?: boolean
  enableDocumentPictureInPicture?: boolean
  experimentalSvgIcons?: boolean
  fluid?: boolean
  fullscreen?: {
    options?: {
      navigationUI?: string
    }
    [key: string]: any
  }
  id?: string
  inactivityTimeout?: number
  language?: string
  languages?: Object
  liveui?: boolean
  liveTracker?: {
    trackingThreshold?: number
    liveTolerance?: number
  }
  nativeControlsForTouch?: boolean
  normalizeAutoplay?: boolean
  notSupportedMessage?: string
  noUITitleAttributes?: boolean
  playbackRates?: Array<number>
  plugins?: Object
  preferFullWindow?: boolean
  responsive?: boolean
  restoreEl?: boolean | Element
  skipButtons?: {
    forward?: number
    backward?: number
  }
  sources?: Array<{
    src: string
    type: string
  }>
  suppressNotSupportedError?: boolean
  techCanOverridePoster?: boolean
  techOrder?: Array<string>
  userActions?: {
    click?: boolean | Function
    doubleClick?: boolean | Function
    hotkeys?: boolean | Function | Object
  }
  vttjs?: string
  [key: string]: any
}

export type VideoPlayerOptions = VideoJsOptions

export interface VideoPlayerProps {
  options?: VideoJsOptions
  slots?: typeof Component
}
