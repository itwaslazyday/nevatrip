const getHoursPrefix = (hours: number): string => {
  const lastDigit = hours.toString().slice(-1);
  if (hours >= 11 && hours <= 19) {
    return ('часов');
  }

  if (hours > 0) {
    switch(lastDigit) {
      case '1':
        return ('час');
      case '2':
      case '3':
      case '4':
        return ('часа');
      default:
        return ('часов');
    }
  }
  return ('');
};

const getMinutesPrefix = (minutes: number): string => {
  const lastDigit = minutes.toString().slice(-1);
  if (minutes >= 11 && minutes <= 19) {
    return ('минут');
  }

  if (minutes > 0) {
    switch(lastDigit) {
      case '1':
        return ('минута');
      case '2':
      case '3':
      case '4':
        return ('минуты');
      default:
        return ('минут');
    }
  }
  return ('');
};

const getRuntime = (runtime: number): {hours: number; minutes: number; hoursPrefix: string; minutesPrefix: string} => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime - (hours * 60);
  const hoursPrefix = getHoursPrefix(hours);
  const minutesPrefix = getMinutesPrefix(minutes);
  return {hours, minutes, hoursPrefix, minutesPrefix};
};

export {getRuntime};
