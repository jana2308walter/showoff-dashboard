import { Component, computed, HostBinding, input } from '@angular/core';
import { CardColor } from './card-color';

@Component({
  selector: 'sod-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  readonly $title = input('', { alias: 'title' });
  readonly $values = input<string[]>([], { alias: 'values' });
  readonly $subtitles = input<string[]>([], { alias: 'subtitles' });

  readonly $color = input<CardColor>('transparent', { alias: 'color' });

  protected readonly $mappedValues = computed(() => {
    const values = this.$values();

    if (values.length === 1) {
      return values;
    }

    if (values.length === 2) {
      return [`${values[0]} ${values[1]}`];
    }

    if (values.length === 9) {
      let mappedValues: string[] = [];
      let i = 0;

      while (i < values.length) {
        if (i % 3 === 0) {
          const mappedValue = `${values[i]}: ${values[i + 1]} ${values[i + 2]}`;
          mappedValues = mappedValues.concat(mappedValue);
        }

        i++;
      }

      return mappedValues;
    }

    return [];
  });

  protected readonly $mappedSubtitles = computed(() => {
    const subtitles = this.$subtitles();

    if (subtitles.length === 1) {
      return subtitles[0];
    }

    if (subtitles.length === 2) {
      return `${subtitles[0]} ${subtitles[1]}`;
    }

    if (subtitles.length === 3) {
      return `${subtitles[0]}: ${subtitles[1]} ${subtitles[2]}`;
    }

    if (subtitles.length === 5) {
      return `${subtitles[0]}: ${subtitles[1]} ${subtitles[2]} (${subtitles[3]}${subtitles[4]})`;
    }

    return '';
  });

  @HostBinding('class')
  protected get classes(): string {
    return `card is-${this.$color()}`;
  }
}
