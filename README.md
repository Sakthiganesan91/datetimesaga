# Date Formatter Package

A simple JavaScript package for formatting the current date into a structured object containing the day, month, and year, with support for localization options.

## Installation

You can install the package via npm. Run the following command in your project directory:

npm install datetimesaga

## Usage

import getDate from 'datetimesaga';

const today = getDate();<br/>
console.log(today);<br/>
// Output: { date: 10, month: 'September', year: '2024', day: 'Tuesday' }

## API

getDate(options)

This function returns an object with the current date, month, year, and day.

Parameters:
<br/>
options (Object): An optional object to customize the output.<br/>
locales (string): A string with a BCP 47 language tag (default: "en-US").<br/>
monthFormat (string): The format for the month (default: "long"). <br/>Options include "numeric", "2-digit", "long", "short", "narrow".<br/>
weekDayFormat (string): The format for the weekday (default: "long"). <br/>Options include "narrow", "short", "long".<br/>
yearFormat (string): The format for the year (default: "numeric"). <br/>Options include "numeric", "2-digit".<br/>

Returns:

An object containing:<br/>
date: The current date (number).<br/>
month: The formatted month (string).<br/>
year: The formatted year (string).<br/>
day: The formatted day of the week (string).

getTime(options)

<br/>
This function returns the current time as a formatted string, based on the provided locale and formatting options.

<br/>
Parameters:
options (Object): An optional object to customize the output.

<br/>
locales (string): A string with a BCP 47 language tag (default: "en-US").

<br/>
timeStyle (string): The format for the time (default: "medium"). 
<br/>
Options include "full", "long", "medium", "short".

Returns:

A formatted string representing the current time. If an error occurs, the function returns "N/A".
