import { defineComponent, Types } from 'bitecs';
import { Vector2 } from './vector2';

const GameBarFactory = () => defineComponent({
  position: Vector2,
  type: Types.ui8,
  parentRef: Types.ui8,
  currentStats: { max: Types.f32, current: Types.f32 }
});

// Factory de componentes de Barras de juego.
export const ManaBar = GameBarFactory()
export const HealthBar = GameBarFactory()

