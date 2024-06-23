import tracer from 'dd-trace';

if (process.env.DD_AGENT_HOST) {
  tracer.init({
    logInjection: true,
  });
}
export default tracer;
