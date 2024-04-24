import counterStyle from "./Counter.module.css";
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <section className="primary-bg color-white py-4">
      <div className="container">
        <div className="row gap-4 gap-lg-0">
          {counters.map((c) => (
            <div key={c.title} className={`col-lg-3 ${counterStyle.item}`}>
              {/* <h5>{c.count}+</h5> */}
              <CountUp className={counterStyle.counter_number}  end={c.count} duration={3}></CountUp>
              <span>{c.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const counters = [
  { title: "countries", count: 12 },
  { title: "employees", count: 2000 },
  { title: "customers in the Fortune 500", count: 25 },
  { title: "years of experience", count: 40 },
];

export default Counter;
