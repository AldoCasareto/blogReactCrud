import React, { useContext, useState } from 'react';
/* import './write.css'; */
import axios from 'axios';
import { Context } from '../../context/Context';
import { Select } from '@chakra-ui/react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const Write = () => {
  const { user } = useContext(Context);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [format, setFormat] = useState('');
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2021-08-22T21:11:54')
  );
  const [address, setAddress] = useState('');
  const [placeOfInterest, setPlaceOfInterest] = useState('');
  const [areaCode, SetAreaCode] = useState('');

  console.log(selectedDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  console.log(format);
  const handlePost = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
      price,
      duration,
      age,
      bio,
      format,
      selectedDate,
      address,
      placeOfInterest,
      areaCode,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;

      try {
        await axios.post('/upload', data);
      } catch (error) {}
    }
    try {
      const res = await axios.post('/posts', newPost);
      window.location.replace(`/post/${res.data._id}`);
    } catch (error) {}
  };

  return (
    <>
      <div className='container w-100 rounded bg-info d-flex justify-content-evenly align-items-center'>
        <div className='w-50'>
          {file && (
            <img
              className='writeImg w-75 h-75'
              src={URL.createObjectURL(file)}
              alt=''
            />
          )}
        </div>
        <div className='write bg-info w-50 d-flex flex-colum'>
          <form
            className=' container  bg-light rounded-pill'
            onSubmit={handlePost}
          >
            <div className=''>
              <div className='d-flex justify-content-center mb-2'>
                <label htmlFor='fileInput'>
                  <PhotoCameraIcon />
                </label>
                <input
                  type='file'
                  id='fileInput'
                  style={{ display: 'none' }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type='text'
                  placeholder='Course Title'
                  className='align-self-center'
                  autoFocus={true}
                />
              </div>
              <div className='d-flex align-items-center justify-content-evenly  '>
                <textarea
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  placeholder='Course Description'
                  type='text'
                  className='writeInput writeText'
                ></textarea>
                <textarea
                  onChange={(e) => {
                    setBio(e.target.value);
                  }}
                  placeholder='Bio About yourself'
                  type='text'
                  className='writeInput writeText'
                ></textarea>
              </div>
              <div className='d-flex  justify-content-evenly'>
                <input
                  className=' w-25'
                  onChange={(e) => setPrice(e.target.value)}
                  type='text'
                  placeholder='Price'
                  autoFocus={true}
                />
                <input
                  className=' w-25'
                  onChange={(e) => setDuration(e.target.value)}
                  type='text'
                  placeholder='Duration'
                  autoFocus={true}
                />
                <input
                  className=' w-25'
                  onChange={(e) => setAge(e.target.value)}
                  type='text'
                  placeholder='Age Recommendation'
                  autoFocus={true}
                />
              </div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justifyContent='flex-start'>
                  <KeyboardDatePicker
                    disableToolbar
                    variant='inline'
                    format='MM/dd/yyyy'
                    margin='normal'
                    id='date-picker-inline'
                    label='Date'
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                  <KeyboardTimePicker
                    margin='normal'
                    id='time-picker'
                    label='Time'
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change time',
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <Select
                className=' writeText'
                placeholder='Format'
                onChange={(e) => setFormat(e.target.value)}
              >
                <option value='online'>Online</option>
                <option value='inPerson'>In Person</option>
              </Select>
            </div>
            {format === 'inPerson' ? (
              <div>
                <input
                  className='writeInput '
                  type='text'
                  placeholder='Address'
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input className='writeInput ' type='text' placeholder='City' />
                <input
                  className='writeInput '
                  type='number'
                  placeholder='Area Code'
                  onChange={(e) => SetAreaCode(e.target.value)}
                />
                <input
                  className='writeInput '
                  type='text'
                  placeholder='Place of Interest'
                  onChange={(e) => setPlaceOfInterest(e.target.value)}
                />
              </div>
            ) : null}
            <button type='submit' className='writeSubmit'>
              Publish
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Write;
