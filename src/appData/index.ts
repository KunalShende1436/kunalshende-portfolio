// Data for portfolio
import {
  ArduinoIDEIcon,
  JavaScriptIcon,
  NextjsIcon,
  NodejsIcon,
  PythonIcon,
  ReactIcon,
  SocketIcon,
  TailwindCSS,
  TypescriptIcon,
} from '../utils/icons'

// Service Data
export const serviceData = [
  {
    icon: ArduinoIDEIcon,
    title: 'Embedded Systems & IoT',
    shortDescription: 'Architecture and firmware development for ESP32, ESP32-S3, ATmega328P, FreeRTOS, and peripheral bus protocols (SPI, I2C, UART, ADC/DAC).',
  },
  {
    icon: PythonIcon,
    title: 'Cybersecurity & VAPT',
    shortDescription: 'Vulnerability assessment, network footprinting, Nmap reconnaissance, security telemetry, and forensic incident snapshotting.',
  },
  {
    icon: ArduinoIDEIcon,
    title: 'Hardware Security & HID Telemetry',
    shortDescription: 'Real-time detection and mitigation of rogue USB devices and HID keystroke injection attacks via micro-timing anomaly scoring.',
  },
  {
    icon: PythonIcon,
    title: 'RF Spectrum & Wireless Resilience',
    shortDescription: '2.4 GHz RF spectrum analysis, signal noise mapping, RSSI foxhunting, and wireless resilience benchmarking across communication stacks.',
  },
  {
    icon: TypescriptIcon,
    title: 'Web Serial & Tooling Platforms',
    shortDescription: 'Zero-install browser flashing utilities and hardware OS dashboards utilizing Web Serial API, WebSockets, and modern TypeScript.',
  },
  {
    icon: JavaScriptIcon,
    title: 'Full-Stack Software Architecture',
    shortDescription: 'End-to-end applications connecting custom hardware devices with full-stack web platforms using Python Flask, Node.js, and responsive UIs.',
  },
]

// Skill List
export const skillList = [
  {
    name: 'C / C++',
    icon: ArduinoIDEIcon,
  },
  {
    name: 'Python',
    icon: PythonIcon,
  },
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    name: 'ESP32 / ESP32-S3',
    icon: ArduinoIDEIcon,
  },
  {
    name: 'FreeRTOS',
    icon: ArduinoIDEIcon,
  },
  {
    name: 'Node.js',
    icon: NodejsIcon,
  },
  {
    name: 'Tailwind CSS',
    icon: TailwindCSS,
  },
]

export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Projects', href: '/projects' },
  { title: 'Experience', href: '/experience' },
  { title: 'Education', href: '/education' },
  { title: 'Achievements', href: '/achievements' },
  { title: 'Skills', href: '#skills' },
  { title: 'Contact', href: '#contact' },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

export const languages = ['En', 'Es', 'Fr', 'De', 'Ru']
