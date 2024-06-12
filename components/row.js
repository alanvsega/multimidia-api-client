export default {
    name: 'Row',
    props: {
      person: {
        type: Object,
        required: true
      }
    },
    template: `
    <ul class="row">
      <li class="col-m">{{ person.name }}</li>
      <li class="col-l">{{ person.height }}</li>
      <li class="col-l">{{ person.mass }}</li>
      <li class="col-m">{{ person.hair_color }}</li>
      <li class="col-l">{{ person.skin_color }}</li>
      <li class="col-m">{{ person.eye_color }}</li>
      <li class="col-l">{{ person.birth_year }}</li>
    </ul>
    `
  }