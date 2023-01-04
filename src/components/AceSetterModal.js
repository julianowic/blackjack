const AceSetterModal = ({handleSetLow, handleSetHigh}) => (
    <div>
      <button onClick={handleSetLow}>Set ace low</button>
      <button onClick={handleSetHigh}>Set ace high</button>
    </div>
  );

export default AceSetterModal