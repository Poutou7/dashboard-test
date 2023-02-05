import React, { useEffect, useRef } from 'react'

function Statistics({ title, semiTitle, list, valuesStat }) {

  const canvasRef = useRef(null)

  const colors = ['orange', 'green', 'blue', 'red']

  const resutlList = list.map((el) => {
    return <li key={el.id} className={colors[el.id - 1]}>
      {el.title}
      {
        el.price && <span>{el.price}</span>
      }
    </li>
  })

  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    let segmentColor = [];
    segmentColor.push("#fe9518");
    segmentColor.push("#34B53A");
    segmentColor.push("#3ac2cb");
    segmentColor.push("#f12e67");

    let values = valuesStat;

    let total = 0;

    //Reset the canvas
    context.restore();
    context.save();
    context.clearRect(0, 0, 200, 200);

    for (let i = 0; i < values.length; i++) {
      total = total + values[i];
    }


    let parts = 360 / total;
    let startAngle = 0

    context.translate(100, 100)
    context.rotate(270 * (Math.PI / 180)); //Turn the chart around so the segments start from 12 o'clock

    for (let i = 0; i < values.length; i++) {

      //Draw the segments
      context.fillStyle = segmentColor[i];
      // context.textAlign = "center";
      // context.fillText(values[i], 60, 60);
      context.beginPath();
      context.moveTo(0, 0);
      context.arc(0, 0, 100, startAngle * (Math.PI / 180), (startAngle + (values[i] * parts)) * (Math.PI / 180), false);
      context.lineTo(0, 0);
      context.closePath();
      context.fill();

      startAngle = startAngle + (values[i] * parts);
    }

    //Turn into a donut!!
    context.fillStyle = "#16263f";
    context.beginPath();
    context.arc(0, 0, 70, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();

  }, [valuesStat])

  return (
    <div className='stat custom-box'>
      {
        title && <h2>{title}</h2>
      }
      <div className='flex-between'>
        <ul>
          {resutlList}
        </ul>
        <div className='canvas'>
          <canvas ref={canvasRef} width='200px' height="200px"></canvas>
          {semiTitle && <span>{semiTitle}</span>}
        </div>
      </div>
    </div >
  )
}

export default Statistics
