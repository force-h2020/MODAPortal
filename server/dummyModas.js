import Moda from './models/moda';

export default function () {
  Moda.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const content1 = `Moda 1 here
      est laborum`;

    const content2 = `Moda 2 here
      ipsum quia dolor sit amet.`;

    const moda1 = new Moda({ name: 'Admin', title: 'Hello MODA', slug: 'hello-mern', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
    const moda2 = new Moda({ name: 'Admin', title: 'Lorem Moda', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });

    Moda.create([moda1, moda2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
