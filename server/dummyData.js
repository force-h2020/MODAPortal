import Moda from './models/moda';

export default function () {
  Moda.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const moda1 = new Moda({ userCase: 'Dummy Case #1', slug: 'hello-user-case', cuid: 'cikqgkv4q01ck7453ualdn3hd' , author: {firstName: 'Jane', familyName: 'Doe', email: 'hi@awesome.com', affiliation: 'Awesome Co.'}});
    const moda2 = new Moda({ userCase: 'Dummy Case #2', slug: 'lorem-ipsum-case', cuid: 'cikqgkv4q01ck7453ualdn3hf' , author: {firstName: 'Jane', familyName: 'Doe', email: 'hi@awesome.com', affiliation: 'Awesome Co.'} });

    Moda.create([moda1, moda2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
