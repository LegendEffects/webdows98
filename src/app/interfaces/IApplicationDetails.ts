export default interface IApplicationDetails {
  title: string;
  icon: string;

  width: number;
  height: number;

  resizable?: boolean;

  actions?: {
    minimize?: boolean;
    restore?: boolean;
    close?: boolean;
  }

  x?: 0;
  y?: 0;
}