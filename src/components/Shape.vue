<template>
  <div class="shape" :class="shapeClass">
    <div class="weight">{{ shape.weight }}kg</div>
  </div>
</template>

<script>
import { CIRCLE, TRIANGLE, SQUARE } from '@/constants/shape';

export default {
  props: {
    placeRandomly: {
      type: Boolean,
      required: false,
      default: false,
    },
    isOnBoard: {
      type: Boolean,
      required: false,
      default: false,
    },
    shape: {
      type: Object,
      required: true,
    },
  },
  computed: {
    shapeClass() {
      const { type } = this.shape;
      return {
        square: type === SQUARE,
        triangle: type === TRIANGLE,
        circle: type === CIRCLE,
      };
    },
  },
  mounted() {
    this.setScaleAndColor();
    this.$watch('shape.left', this.setShapePosition, { immediate: true });
  },
  methods: {
    setScaleAndColor() {
      const { color, scale, type } = this.shape;
      const { style } = this.$el;

      // Set scale according to weight
      style.transform = `scale(${scale})`;

      // Set random generated color
      // if triangle set the border bottom color
      if (type === TRIANGLE) {
        style.borderBottomColor = color;
      } else {
        style.backgroundColor = color;
      }
      if (this.isOnBoard) {
        style.transform += ' translateY(-100%)';
      }
    },
    setShapePosition(left) {
      const { width } = this.$el.getBoundingClientRect();
      const start = this.placeRandomly ? 60 : 0;

      this.$el.style.left = (this.placeRandomly && left > 25)
        ? `calc(${start + left}% - ${width}px)`
        : `${start + left}%`;
    },
  },
};
</script>

<style lang="scss" scoped>
.shape {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: top left;
  .weight {
    font-size: 10px;
    font-weight: 500;
    color: #fff;
  }
}
.square,
.circle {
  width  : 3rem;
  height : 3rem;
}

.circle {
  border-radius: 50%;
}
.triangle {
  width         : 0;
  height        : 0;
  border-left   : 1.5rem solid transparent;
  border-right  : 1.5rem solid transparent;
  border-bottom : 2rem solid;

  .weight {
    position   : absolute;
    top        : calc(100% + 1rem);
    width      : 4.5rem;
    text-align : center;
  }
}
</style>
