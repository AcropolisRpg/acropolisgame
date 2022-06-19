import { defineComponent, Types } from 'bitecs';

export const Vector2 = {x: Types.f32, y: Types.f32}
export const Position = defineComponent(Vector2)
export const TargetPosition = defineComponent(Vector2)
export const Velocity = defineComponent(Vector2)
export const Actions = defineComponent({actions: Types.ui8})

const GameBarFactory = () => defineComponent({
  position: Vector2,
  type: Types.ui8,
  parentRef: Types.ui8,
  currentStats: { max: Types.f32, current: Types.f32 }
});

// Factory de componentes de Barras de juego.
export const ManaBar = GameBarFactory()
export const HealthBar = GameBarFactory()
export const Body = defineComponent({texture: Types.ui8})
export const Shoes = defineComponent({texture: Types.ui8})
export const Clothes = defineComponent({texture: Types.ui8})
export const TransformRectangle = defineComponent({height: Types.ui8, width: Types.ui8 })
export const Player = defineComponent()
export const Resource = defineComponent()