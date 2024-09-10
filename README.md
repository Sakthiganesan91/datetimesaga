# Date Formatter Package

A simple JavaScript package for formatting the current date into a structured object containing the day, month, and year, with support for localization options.

## Installation

You can install the package via npm. Run the following command in your project directory:

npm install datetimesaga

## Usage

import getDate from 'datetimesaga';

const today = getDate();
console.log(today);
// Output: { date: 10, month: 'September', year: '2024', day: 'Tuesday' }

## API

getDate(options)

This function returns an object with the current date, month, year, and day.

Parameters:

options (Object): An optional object to customize the output.
locales (string): A string with a BCP 47 language tag (default: "en-US").
monthFormat (string): The format for the month (default: "long"). Options include "numeric", "2-digit", "long", "short", "narrow".
weekDayFormat (string): The format for the weekday (default: "long"). Options include "narrow", "short", "long".
yearFormat (string): The format for the year (default: "numeric"). Options include "numeric", "2-digit".

Returns:
An object containing:
date: The current date (number).
month: The formatted month (string).
year: The formatted year (string).
day: The formatted day of the week (string).
