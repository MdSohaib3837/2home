import firebase from "firebase";
import axios from "axios";

const firebaseConfig = {
  apiKey: "AIzaSyBvUoIX46gXrATytUitSPh9JXF8dVUyrIM",
  authDomain: "secondhome-c5f64.firebaseapp.com",
  databaseURL: "https://secondhome-c5f64-default-rtdb.firebaseio.com",
  projectId: "secondhome-c5f64",
  storageBucket: "secondhome-c5f64.appspot.com",
  messagingSenderId: "600412636345",
  appId: "1:600412636345:web:06ae357f3b63942fc3c768",
  measurementId: "G-HQ7T5QM6FD",
};
firebase.initializeApp(firebaseConfig);

export const state = {
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  dayNames: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  prayerList: [
    {
      tasbeehFatimaCompleted: false,
      prayed: false,
      name: "Fajar",
    },
    {
      tasbeehFatimaCompleted: false,
      prayed: false,
      name: "Zohar",
    },
    {
      tasbeehFatimaCompleted: false,
      prayed: false,
      name: "Asar",
    },
    {
      tasbeehFatimaCompleted: false,
      prayed: false,
      name: "Maghrib",
    },
    {
      tasbeehFatimaCompleted: false,
      prayed: false,
      name: "Ishaa",
    },
  ],
  prayerLeastTimes: [
    {
      hours: 6,
      minutes: 30,
    },
    {
      hours: 13,
      minutes: 30,
    },
    {
      hours: 17,
      minutes: 0,
    },
    {
      hours: 19,
      minutes: 30,
    },
    {
      hours: 21,
      minutes: 0,
    },
  ],
  zikarList: [
    {
      count: 0,
      name: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
    },
    {
      count: 0,
      name: "سبحان الله",
    },
    {
      count: 0,
      name: "ٱلْحَمْدُ لِلَّٰهِ",
    },
    {
      count: 0,
      name: "ٱللَّٰهُ أَكْبَرُِ",
    },
    {
      count: 0,
      name: "أَسْتَغْفِرُ اللّٰهَ",
    },
    {
      count: 0,
      name: "لآ اِلَهَ اِلّا اللّهُ مُحَمَّدٌ رَسُوُل اللّهِ",
    },
    {
      count: 0,
      name: "يَا حَيُّ يَا قَيُّوْمُ بِرَحْمَتِكَ أَسْتَغِيْث",
    },
    {
      count: 0,
      name: "اَلَّلھُمَّ اغْفِرْلِی وَلِوَالِدَیَّ",
    },
    {
      count: 0,
      name: "اللهم اغفر لِلْمُوْمِنِیْنَ والمؤمنات و لمسلمين والمسلمات",
    },
    {
      count: 0,
      name: "صلى الله عليه وآله وسلمِ",
    },
    {
      count: 0,
      name: "صَلّی اللّٰہُ عَلٰی حَبِیبِہ مُحَمَّدٍ وَّآلِہ واصحابه وسلمِ",
    },
    {
      count: 0,
      name: "الصلوۃ والسلام و علیک یا رسول اللہ و علٰى آلك وأصحابك ياحبيب اللهِ",
    },
  ],
};

export const getUser = async () => {
  let user = getUserToken();
  let id = user.id;
  user = {};
  await firebase
    .database()
    .ref(`users/${id}`)
    .once("value", (snapshot) => {
      if (snapshot.exists()) {
        user = snapshot.val();
      }
    });
  return user;
};

export const updateUserData = async (user) => {
  await firebase
    .database()
    .ref(`users/${user.id}`)
    .update(user)
    .then((res) => {
      console.log("data pushed");
    })
    .catch((error) => {
      console.log("error : ", error);
    });
};

export const saveProfileImage = async (id, file) => {
  let profileUrl = "";
  let fileName = `${Date.now()}.png`;
  await firebase
    .storage()
    .ref(`profileImages/${id}/${fileName}`)
    .put(file)
    .then(async (res) => {
      console.log("data pushed");
      await firebase
        .storage()
        .ref(`profileImages/${id}/${fileName}`)
        .getDownloadURL()
        .then((res) => {
          console.log("download url : ", res);
          profileUrl = res;
        });
    })
    .catch((error) => {
      console.log("error : ", error);
    });
  return profileUrl;
};

export const updateSetting = async (settings) => {
  let user = getUserToken();
  await firebase
    .database()
    .ref(`settings/${user.id}`)
    .set(settings)
    .then((res) => {
      console.log("data pushed");
    })
    .catch((error) => {
      console.log("error : ", error);
    });
};

export const updateZikarList = async (zikarList) => {
  let user = getUserToken();
  await firebase
    .database()
    .ref(`zikarList/${user.id}`)
    .set(zikarList)
    .then((res) => {
      console.log("data pushed");
    })
    .catch((error) => {
      console.log("error : ", error);
    });
};

export const getZikarList = async () => {
  let user = getUserToken();
  if (!user.id) return;
  var zikarList = [];

  await firebase
    .database()
    .ref(`zikarList/${user.id}`)
    .once("value", (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        data.forEach((todo) => {
          zikarList.push(todo);
        });
      }
      return zikarList;
    });
  return zikarList;
};

export const getSettings = async () => {
  let user = getUserToken();
  if (!user.id) return;
  var settings = {};
  await firebase
    .database()
    .ref(`settings/${user.id}`)
    .once("value", (snapshot) => {
      if (snapshot.exists()) {
        settings = snapshot.val();
      }
      return settings;
    });
  return settings;
};

export const getSalawatByDate = async (date) => {
  let user = getUserToken();
  if (!user.id) return;
  var count = 0;

  await firebase
    .database()
    .ref(`salawat/${user.id}`)
    .orderByChild("date")
    .equalTo(date)
    .once("value", (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        let key = Object.keys(data)[0];
        count = data[key]?.count;
      }
      return count;
    });
  return count;
};

export const getPrayerByDate = async (date) => {
  let user = getUserToken();
  if (!user.id) return;
  var prayers = [];

  await firebase
    .database()
    .ref(`prayer/${user.id}`)
    .orderByChild("date")
    .equalTo(date)
    .once("value", (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        let key = Object.keys(data)[0];
        let prayersData = data[key].prayers;
        prayersData.forEach((prayer) => {
          prayers.push(prayer);
        });
      }
      return prayers;
    })
    .catch((error) => {
      prayers = error.message;
    });
  return prayers;
};

export const getZikarByDate = async (date) => {
  let user = getUserToken();
  if (!user.id) return;
  var zikar = [];

  await firebase
    .database()
    .ref(`zikar/${user.id}`)
    .orderByChild("date")
    .equalTo(date)
    .once("value", (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        let key = Object.keys(data)[0];
        let zikarData = data[key].zikar;
        zikarData.forEach((prayer) => {
          zikar.push(prayer);
        });
        console.log("data : ", zikar);
      }
      return zikar;
    });
  return zikar;
};

export const getEnableDatesForSalawatAndPrayer = async (startDate, endDate) => {
  let user = getUserToken();
  if (!user.id) return;
  var dates = [];
  var settings = {};
  await getSettings().then((res) => {
    settings = res;
  });
  console.log(settings);
  await firebase
    .database()
    .ref(`salawat/${user.id}`)
    .orderByChild("date")
    .startAt(startDate)
    .endAt(endDate)
    .once("value", (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        snapshot.forEach((element) => {
          let object = element.val();
          if (object.count >= settings.salawatCount) {
            dates.push({ completeType: "partial", date: object.date });
          }
        });
      } else {
        // console.log("not exists:::");
      }
      // return dates;
    });
  await firebase
    .database()
    .ref(`prayer/${user.id}`)
    .orderByChild("date")
    .startAt(startDate)
    .endAt(endDate)
    .once("value", (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        snapshot.forEach((element) => {
          let object = element.val();
          if (object.prayers.every((element) => element.prayed === true)) {
            var objIndex = dates.findIndex((obj) => obj.date == object.date);
            if (objIndex !== -1) {
              dates.splice(objIndex, 1);
              dates.push({ completeType: "complete", date: object.date });
            } else {
              dates.push({ completeType: "partial", date: object.date });
            }
          }
        });
      } else {
        // console.log("not exists:::");
      }
      // return dates;
    });
  return dates;
};

export const savePrayer = async (prayer) => {
  let user = getUserToken();
  if (!user.id) return;

  await firebase
    .database()
    .ref(`prayer/${user.id}`)
    .orderByChild("date")
    .equalTo(prayer.date)
    .once("value", async (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        let key = Object.keys(data)[0];
        let newPrayer = { prayers: prayer.prayers, key: key };
        if (key) {
          await firebase
            .database()
            .ref(`prayer/${user.id}/${key}`)
            .update(newPrayer)
            .then((res) => {
              console.log("data updated");
            });
        } else {
          alert("An error orrured while updating...");
        }
      } else {
        console.log("not exist:::");
        await firebase
          .database()
          .ref(`prayer/${user.id}/${prayer.key}`)
          .set(prayer)
          .then((res) => {
            console.log("data pushed");
          });
      }
    });
};

export const saveZikar = async (zikar) => {
  let user = getUserToken();
  if (!user.id) return;

  await firebase
    .database()
    .ref(`zikar/${user.id}`)
    .orderByChild("date")
    .equalTo(zikar.date)
    .once("value", async (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        let key = Object.keys(data)[0];
        let newZikar = { zikar: zikar.zikar, key: key };
        if (key) {
          await firebase
            .database()
            .ref(`zikar/${user.id}/${key}`)
            .update(newZikar)
            .then((res) => {
              console.log("data updated");
            });
        } else {
          alert("An error orrured while updating...");
        }
      } else {
        console.log("not exist:::");
        await firebase
          .database()
          .ref(`zikar/${user.id}/${zikar.key}`)
          .set(zikar)
          .then((res) => {
            console.log("data pushed");
          });
      }
    });
};

export const saveSalawat = async (salawat) => {
  let user = getUserToken();
  if (!user.id) return;

  await firebase
    .database()
    .ref(`salawat/${user.id}`)
    .orderByChild("date")
    .equalTo(salawat.date)
    .once("value", async (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        let key = Object.keys(data)[0];
        let newSalawat = { ...salawat, count: salawat.count, key: key };
        if (key) {
          await firebase
            .database()
            .ref(`salawat/${user.id}/${key}`)
            .update(newSalawat)
            .then((res) => {
              console.log("old data updated");
            });
        } else {
          alert("An error orrured while updating...");
        }
      } else {
        console.log("not exist:::");
        await firebase
          .database()
          .ref(`salawat/${user.id}/${salawat.key}`)
          .set(salawat)
          .then((res) => {
            console.log("new data pushed");
          });
      }
    });
};

export const saveTodoList = async (todos) => {
  let user = getUserToken();
  if (!user.id) return;

  await firebase
    .database()
    .ref(`todoList/${user.id}/`)
    .set(todos)
    .then((res) => {
      console.log("data pushed");
    });
};

export const getTodoList = async () => {
  let user = getUserToken();
  if (!user.id) return;
  var todoList = [];

  await firebase
    .database()
    .ref(`todoList/${user.id}`)
    .once("value", (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        data.forEach((todo) => {
          todoList.push(todo);
        });
      }
      return todoList;
    });
  return todoList;
};

export const signUp = async (user) => {
  let response = "";
  console.log("user gonna save ", user);
  await firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(async (res) => {
      let useWithSettings = {
        ...user,
        id: res.user.uid,
      };

      await firebase
        .database()
        .ref(`users/${res.user.uid}`)
        .set(useWithSettings)
        .then((res) => {
          console.log("data pushed");
        })
        .catch((error) => {
          console.log("error : ", error);
        });

      await firebase
        .database()
        .ref(`settings/${res.user.uid}`)
        .set({
          autoAdjust: false,
          manualEntery: false,
          salawatCount: 0,
          startDate: "",
        })
        .then((res) => {
          console.log("data pushed");
        })
        .catch((error) => {
          console.log("error : ", error);
        });

      await firebase
        .database()
        .ref(`zikarList/${res.user.uid}`)
        .set(state.zikarList)
        .then((res) => {
          console.log("data pushed");
        })
        .catch((error) => {
          console.log("error : ", error);
        });

      response = "success";
    })
    .catch((err) => {
      console.log(err);
      response = err.message;
    });
  return response;
};

export const login = async (user) => {
  var uid = "";
  await firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((res) => {
      console.log("logged in user res: ", res);
      uid = res.user.uid;
      return uid;
    })
    .catch((error) => {
      alert(error.message);
    });
  return uid;
};

export const changePassword = async (email, password, newPassword) => {
  var res = "";
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(async (resp) => {
      var user = firebase.auth().currentUser;
      await user
        .updatePassword(newPassword)
        .then(() => {
          console.log("Update successful.");
          res = "success";
        })
        .catch(function (error) {
          alert(error.message);
        });
    })
    .catch((error) => {
      alert(error.message);
    });
  return res;
};

export const saveUser = async (id) => {
  var res = "";
  await firebase
    .database()
    .ref(`users/${id}`)
    .once("value", (snapshot) => {
      console.log("snapshot.val(): ", snapshot.val());
      localStorage.setItem("user", JSON.stringify(snapshot.val()));
      res = "success";
    })
    .catch((e) => {
      res = e.message;
      console.log("error occured...", e);
    });
  return res;
};

export const getNews = async () => {
  var response = await axios.get("https://api.publicapis.org/entries");
  return response.data;
};

export const generateKey = (ref) => {
  return firebase.database().ref(ref).push().key;
};

export const getUserToken = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const isMobile = () => {
  if (deviceType() === "mobile") {
    return true;
  }
  return false;
};

export const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

export const getDateString = (dateObject, format) => {
  let date = dateObject ? dateObject : new Date();
  let month = date.getMonth();
  let year = date.getFullYear();
  let day = date.getDate();
  if (format === "MMMM DD, YYYY") {
    return `${state.months[month]} ${day}, ${year}`;
  } else if (format === "YYYY-MM-DD") {
    return `${year}-${month + 1 > 9 ? month + 1 : `0${month + 1}`}-${
      day > 9 ? day : `0${day}`
    }`;
  }
};
