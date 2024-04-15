'use client';
import './globals.css';
import React, { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';


const MainScreen = ({}) => {
  const [Text, setText] = useState<string>('');
  return (
    <div className={'AllProg'}>
      <div className={'Header'}>ВРАЩАЮЩИЙСЯ РОДЯ</div>
      <div className={'PicContainer'}>
        <div className={'Picture'}>
          <Image className={'pic'} width='400' height='400' unoptimized={true}
                 src='https://sun9-56.userapi.com/impg/IW0-dktSzkI6oTkPJdfCFy8BKAI8x7AM8aG9hQ/Bbs91R8QkPo.jpg?size=664x664&quality=96&sign=059582f077015bcb006093d9f728794c&type=album'
                 alt={'Rodya'} />
        </div>
      </div>
      <div className={'ButtonMassive'}>
        <dialog id='my_modal_3' className='modal'>
          <div className='modal-box'>
            <form method='dialog'>
              <button className='BtnExit'>✕</button>
            </form>
            <h3 className='Text'>{Text}</h3>
          </div>
        </dialog>
        <button className='btn' onClick={() => {
          setText('Это пикча Роди');
          if (document) {
            (document.getElementById('my_modal_3') as HTMLFormElement).showModal();
          }
        }}>кнопка
        </button>
        <button className='btn' onClick={() => {
          setText('Пикча Роди не хотела загружаться на сервер');
          if (document) {
            (document.getElementById('my_modal_3') as HTMLFormElement).showModal();
          }
        }}>кнопка
        </button>
        <button className='btn' onClick={() => {
          setText('Пикча Роди показывается по ее URL');
          if (document) {
            (document.getElementById('my_modal_3') as HTMLFormElement).showModal();
          }
        }}>кнопка
        </button>
        <button className='btn' onClick={() => {
          setText('Эта кнопка тоже изменяет состояние, но я не придумал подпись');
          if (document) {
            (document.getElementById('my_modal_3') as HTMLFormElement).showModal();
          }
        }}>кнопка
        </button>
        <button className='btn' onClick={() => {
          setText('"' + Text + '"' + '©Предыдущая кнопка');
          if (document) {
            (document.getElementById('my_modal_3') as HTMLFormElement).showModal();
          }
        }}>кнопка
        </button>
      </div>
    </div>
  );
};

export default MainScreen;
