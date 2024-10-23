import React, { useEffect, useState } from "react";
import { Contract, ethers } from "ethers";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import Modal from "react-awesome-modal";
import Swal from "sweetalert2";
import contract from "../../config/contract";
import ROOTxABI from "../../config/rootABI.json";
import loading from "../../assets/images/loading.gif";
import { Col, Container, Row, Image } from "react-bootstrap";

import souka from "../../assets/images/Items/souka.jpg";
import { piDiscord, piTwitter } from "../../assets/images/icons";
import flick from "../../assets/images/Items/flick.jpg";
import nood from "../../assets/images/Items/nood.jpg";
import wizard from "../../assets/images/Items/wizard.jpg";
import Dodo from "../../assets/images/Items/Dodo.jpg";
import moonwalker from "../../assets/images/Items/moonwalker.jpg";
import chunk from "../../assets/images/Items/chunk.jpg";
import alfie from "../../assets/images/Items/alfieworld.jpg";
import chosen from "../../assets/images/Items/chosenones.jpg";
import maze from "../../assets/images/Items/Maze.jpg";
import paladin from "../../assets/images/Items/Paladin.jpg";
import ready from "../../assets/images/Items/Ready.jpg";
import Sleepy from "../../assets/images/Items/Sleepy.jpg";
import Mythical from "../../assets/images/Items/Mythical.jpg";
import nono from "../../assets/images/Items/nono.png";
import abd from "../../assets/images/Items/AbductionSquad.png";
import etherjump from "../../assets/images/Items/EtherJump.jpg";
import inku from "../../assets/images/Items/Inku.jpg";
import ETHVaultNFT from "../../assets/images/Items/ETHVaultNFT.png";
import kiki from "../../assets/images/Items/kiki.png";
import dz from "../../assets/images/Items/dz.png";
import race from "../../assets/images/Items/race.png";
import helix from "../../assets/images/Items/Helix.png";
import onliner from "../../assets/images/Items/online.png";
import WL from "../../assets/images/Items/WL.jpeg";
import zuku from "../../assets/images/Items/zuku.png";
import degen from "../../assets/images/Items/degen.png";
import hachi from "../../assets/images/Items/hachi.png";
import bobs from "../../assets/images/Items/bobs.jpeg";
import mskd from "../../assets/images/Items/mskd.jpeg";


const LoadCard = () => {
  const [MyWeb3, setMyWeb3] = useState([]);
  const [myAccount, setMyAccount] = useState([]);

  const [ROOTxBalance, setROOTxBalance] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showSettingModal, setShowSettingModal] = useState(false);

  // Setting Modal
  const [disId, setdisId] = useState("");
  const [Addr, setAddr] = useState("");
  const [ProName, setProName] = useState("");

  // souka Ticket Info
  const [soukaburnROOTx, setburnROOTx] = useState(10000);
  const [soukaticketamount, setsoukaticketamount] = useState(0);
  const [soukaticketowned, setsoukaticketowned] = useState(false);
  const [soukapending, setsoukapending] = useState(false);

  // flick Ticket Info
  const [flickburnROOTx, setflickburnROOTx] = useState(10000);
  const [flickticketamount, setflickticketamount] = useState(0);
  const [flickticketowned, setflickticketowned] = useState(false);
  const [flickpending, setflickpending] = useState(false);

  // NOOD Ticket Info
  const [noodburnROOTx, setnoodburnROOTx] = useState(10000);
  const [noodticketamount, setnoodticketamount] = useState(0);
  const [noodticketowned, setnoodticketowned] = useState(false);
  const [noodpending, setnooedpending] = useState(false);

  // wizardgladiators Ticket Info
  const [wizardburnROOTx, setwizardburnROOTx] = useState(10000);
  const [wizardticketamount, setwizardticketamount] = useState(0);
  const [wizardticketowned, setwizardticketowned] = useState(false);
  const [wizardpending, setwizardpending] = useState(false);

  // Dodo wizardgods Ticket Info
  const [DodoburnROOTx, setDodoburnROOTx] = useState(10000);
  const [Dodoticketamount, setDodoticketamount] = useState(0);
  const [Dodoticketowned, setDodoticketowned] = useState(false);
  const [Dodopending, setDodopending] = useState(false);

  // moonwalker wizardgods Ticket Info
  const [moonburnROOTx, setmoonburnROOTx] = useState(10000);
  const [moonticketamount, setmoonticketamount] = useState(0);
  const [moonticketowned, setmoonticketowned] = useState(false);
  const [moonpending, setmoonpending] = useState(false);

  // chunk wizardgods Ticket Info
  const [chunkburnROOTx, setchunkburnROOTx] = useState(10000);
  const [chunkticketamount, setchunkticketamount] = useState(0);
  const [chunkticketowned, setchunkticketowned] = useState(false);
  const [chunkpending, setchunkpending] = useState(false);

  // Alfie wizardgods Ticket Info
  const [alfieburnROOTx, setalfieburnROOTx] = useState(10000);
  const [alfieticketamount, setalfieticketamount] = useState(0);
  const [alfieticketowned, setalfieticketowned] = useState(false);
  const [alfiepending, setalfiepending] = useState(false);

  // Chosen wizardgods Ticket Info
  const [chosenburnROOTx, setchosenburnROOTx] = useState(10000);
  const [chosenticketamount, setchosenticketamount] = useState(0);
  const [chosenticketowned, setchosenticketowned] = useState(false);
  const [chosenpending, setchosenpending] = useState(false);

  // Maze wizardgods Ticket Info
  const [mazeburnROOTx, setmazeburnROOTx] = useState(10000);
  const [mazeticketamount, setmazeticketamount] = useState(0);
  const [mazeticketowned, setmazeticketowned] = useState(false);
  const [mazepending, setmazepending] = useState(false);

  // Mythical wizardgods Ticket Info
  const [MythicalburnROOTx, setMythicalburnROOTx] = useState(10000);
  const [Mythicalticketamount, setMythicalticketamount] = useState(0);
  const [Mythicalticketowned, setMythicalticketowned] = useState(false);
  const [Mythicalpending, setMythicalpending] = useState(false);

  // ready wizardgods Ticket Info
  const [readyburnROOTx, setreadyburnROOTx] = useState(10000);
  const [readyticketamount, setreadyticketamount] = useState(0);
  const [readyticketowned, setreadyticketowned] = useState(false);
  const [readypending, setreadypending] = useState(false);

  // paladin wizardgods Ticket Info
  const [paladinburnROOTx, setpaladinburnROOTx] = useState(10000);
  const [paladinticketamount, setpaladinticketamount] = useState(0);
  const [paladinticketowned, setpaladinticketowned] = useState(false);
  const [paladinpending, setpaladinpending] = useState(false);

  // Sleepy wizardgods Ticket Info
  const [SleepyburnROOTx, setSleepyburnROOTx] = useState(10000);
  const [Sleepyticketamount, setSleepyticketamount] = useState(0);
  const [Sleepyticketowned, setSleepyticketowned] = useState(false);
  const [Sleepypending, setSleepypending] = useState(false);

  // nono Ticket Info
  const [nonoburnROOTx, setnonoburnROOTx] = useState(10000);
  const [nonoticketamount, setnonoticketamount] = useState(0);
  const [nonoticketowned, setnonoticketowned] = useState(false);
  const [nonopending, setnonopending] = useState(false);

  // Abduction Squad (WL)
  const [abdburnROOTx, setabdburnROOTx] = useState(10000);
  const [abdticketamount, setabdticketamount] = useState(0);
  const [abdticketowned, setabdticketowned] = useState(false);
  const [abdpending, setabdpending] = useState(false);

  // etherjump
  const [etherjumpburnROOTx, setetherjumpburnROOTx] = useState(10000);
  const [etherjumpticketamount, setetherjumpticketamount] = useState(0);
  const [etherjumpticketowned, setetherjumpticketowned] = useState(false);
  const [etherjumppending, setetherjumppending] = useState(false);

  // inku
  const [inkuburnROOTx, setinkuburnROOTx] = useState(10000);
  const [inkuticketamount, setinkuticketamount] = useState(0);
  const [inkuticketowned, setinkuticketowned] = useState(false);
  const [inkupending, setinkupending] = useState(false);

  // ETHVaultNFT
  const [ETHVaultNFTburnROOTx, setETHVaultNFTburnROOTx] = useState(10000);
  const [ETHVaultNFTticketamount, setETHVaultNFTticketamount] = useState(0);
  const [ETHVaultNFTticketowned, setETHVaultNFTticketowned] = useState(false);
  const [ETHVaultNFTpending, setETHVaultNFTpending] = useState(false);

  // Kiki
  const [kikiburnROOTx, setkikiburnROOTx] = useState(10000);
  const [kikiticketamount, setkikiticketamount] = useState(0);
  const [kikiticketowned, setkikiticketowned] = useState(false);
  const [kikipending, setkikipending] = useState(false);

  // dz
  const [dzburnROOTx, setdzburnROOTx] = useState(10000);
  const [dzticketamount, setdzticketamount] = useState(0);
  const [dzticketowned, setdzticketowned] = useState(false);
  const [dzpending, setdzpending] = useState(false);

  // race
  const [raceburnROOTx, setraceburnROOTx] = useState(10000);
  const [raceticketamount, setraceticketamount] = useState(0);
  const [raceticketowned, setraceticketowned] = useState(false);
  const [racepending, setracepending] = useState(false);

  // helix
  const [helixburnROOTx, sethelixburnROOTx] = useState(10000);
  const [helixticketamount, sethelixticketamount] = useState(0);
  const [helixticketowned, sethelixticketowned] = useState(false);
  const [helixpending, sethelixpending] = useState(false);

  //onliner
  const [onlinerburnROOTx, setonlinerburnROOTx] = useState(10000);
  const [onlinerticketamount, setonlinerticketamount] = useState(0);
  const [onlinerticketowned, setonlinerticketowned] = useState(false);
  const [onlinerpending, setonlinerpending] = useState(false);

  // WL
  const [wlburnROOTx, setwlburnROOTx] = useState(25000);
  const [wlticketamount, setwlticketamount] = useState(0);
  const [wlticketowned, setwlticketowned] = useState(false);
  const [wlpending, setwlpending] = useState(false);

  // mskd
  const [mskdburnROOTx, setmskdburnROOTx] = useState(10000);
  const [mskdticketamount, setmskdticketamount] = useState(0);
  const [mskdticketowned, setmskdticketowned] = useState(false);
  const [mskdpending, setmskdpending] = useState(false);

  // ZukuVerse
  const [zukuburnROOTx, setzukuburnROOTx] = useState(10000);
  const [zukuticketamount, setzukuticketamount] = useState(0);
  const [zukuticketowned, setzukuticketowned] = useState(false);
  const [zukupending, setzukupending] = useState(false);

  // degen
  const [degenburnROOTx, setdegenburnROOTx] = useState(10000);
  const [degenticketamount, setdegenticketamount] = useState(0);
  const [degenticketowned, setdegenticketowned] = useState(false);
  const [degenpending, setdegenpending] = useState(false);

  // hachi
  const [hachiburnROOTx, sethachiburnROOTx] = useState(10000);
  const [hachiticketamount, sethachiticketamount] = useState(0);
  const [hachiticketowned, sethachiticketowned] = useState(false);
  const [hachipending, sethachipending] = useState(false);

  // bobs
  const [bobsburnROOTx, setbobsburnROOTx] = useState(10000);
  const [bobsticketamount, setbobsticketamount] = useState(0);
  const [bobsticketowned, setbobsticketowned] = useState(false);
  const [bobspending, setbobspending] = useState(false);

  useEffect(() => {
    if (window.web3 !== undefined && window.ethereum) {
      loadWeb3();
    }
  }, []);

  useEffect(() => {
    if (MyWeb3.length !== 0) {
      getROOTxBalance();
      getsheetdata();
    }
  }, [MyWeb3, myAccount[0]]);

  const getsheetdata = async () => {
    await axios
      .get("https://sheet.best/api/sheets/e2580e2b-cc24-4aa0-86bf-39d52659b2d8")
      .then((res) => {
        var soukacount = 0;
        var flickcount = 0;
        var noodcount = 0;
        var wizardcount = 0;
        var Dodocount = 0;
        var Mooncount = 0;
        var chunkcount = 0;
        var alfiecount = 0;
        var chosencount = 0;
        var mazecount = 0;
        var Mythicalcount = 0;
        var readycount = 0;
        var paladincount = 0;
        var Sleepycount = 0;
        var nonocount = 0;
        var abdcount = 0;
        var etherjumpcount = 0;
        var inkucount = 0;
        var ETHVaultNFTcount = 0;
        var kikicount = 0;
        var dzcount = 0;
        var racecount = 0;
        var helixcount = 0;
        var onlinercount = 0;
        var wlcounter = 0;
        var zukucounter = 0;
        var degencounter = 0;
        var hachicounter = 0;
        var bobscounter = 0;
        var mskdcounter = 0;

        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].Project === "souka") {
            soukacount++;
            if (res.data[i].Account === myAccount[0]) {
              setsoukaticketowned(true);
            }
          } else if (res.data[i].Project === "flick") {
            flickcount++;
            if (res.data[i].Account === myAccount[0]) {
              setflickticketowned(true);
            }
          } else if (res.data[i].Project === "nood") {
            noodcount++;
            if (res.data[i].Account === myAccount[0]) {
              setnoodticketowned(true);
            }
          } else if (res.data[i].Project === "wizard") {
            wizardcount++;
            if (res.data[i].Account === myAccount[0]) {
              setwizardticketowned(true);
            }
          } else if (res.data[i].Project === "Dodo") {
            Dodocount++;
            if (res.data[i].Account === myAccount[0]) {
              setDodoticketowned(true);
            }
          } else if (res.data[i].Project === "Moon") {
            Mooncount++;
            if (res.data[i].Account === myAccount[0]) {
              setmoonticketowned(true);
            }
          } else if (res.data[i].Project === "Chunk") {
            chunkcount++;
            if (res.data[i].Account === myAccount[0]) {
              setchunkticketowned(true);
            }
          } else if (res.data[i].Project === "Alfie") {
            alfiecount++;
            if (res.data[i].Account === myAccount[0]) {
              setalfieticketowned(true);
            }
          } else if (res.data[i].Project === "Chosen") {
            chosencount++;
            if (res.data[i].Account === myAccount[0]) {
              setchosenticketowned(true);
            }
          } else if (res.data[i].Project === "Maze") {
            mazecount++;
            if (res.data[i].Account === myAccount[0]) {
              setmazeticketowned(true);
            }
          } else if (res.data[i].Project === "Mythical") {
            Mythicalcount++;
            if (res.data[i].Account === myAccount[0]) {
              setMythicalticketowned(true);
            }
          } else if (res.data[i].Project === "ready") {
            readycount++;
            if (res.data[i].Account === myAccount[0]) {
              setreadyticketowned(true);
            }
          } else if (res.data[i].Project === "paladin") {
            paladincount++;
            if (res.data[i].Account === myAccount[0]) {
              setpaladinticketowned(true);
            }
          } else if (res.data[i].Project === "Sleepy") {
            Sleepycount++;
            if (res.data[i].Account === myAccount[0]) {
              setSleepyticketowned(true);
            }
          } else if (res.data[i].Project === "nono") {
            nonocount++;
            if (res.data[i].Account === myAccount[0]) {
              setnonoticketowned(true);
            }
          } else if (res.data[i].Project === "abd") {
            abdcount++;
            if (res.data[i].Account === myAccount[0]) {
              setabdticketowned(true);
            }
          } else if (res.data[i].Project === "etherjump") {
            etherjumpcount++;
            if (res.data[i].Account === myAccount[0]) {
              setetherjumpticketowned(true);
            }
          } else if (res.data[i].Project === "inku") {
            inkucount++;
            if (res.data[i].Account === myAccount[0]) {
              setinkuticketowned(true);
            }
          } else if (res.data[i].Project === "ETHVaultNFT") {
            ETHVaultNFTcount++;
            if (res.data[i].Account === myAccount[0]) {
              setETHVaultNFTticketowned(true);
            }
          } else if (res.data[i].Project === "kiki") {
            kikicount++;
            if (res.data[i].Account === myAccount[0]) {
              setkikiticketowned(true);
            }
          } else if (res.data[i].Project === "dz") {
            dzcount++;
            if (res.data[i].Account === myAccount[0]) {
              setdzticketowned(true);
            }
          } else if (res.data[i].Project === "race") {
            racecount++;
            if (res.data[i].Account === myAccount[0]) {
              setraceticketowned(true);
            }
          } else if (res.data[i].Project === "helix") {
            helixcount++;
            if (res.data[i].Account === myAccount[0]) {
              sethelixticketowned(true);
            }
          } else if (res.data[i].Project === "onliner") {
            onlinercount++;
            if (res.data[i].Account === myAccount[0]) {
              setonlinerticketowned(true);
            }
          } else if (res.data[i].Project === "wl") {
            wlcounter++;
            if (res.data[i].Account === myAccount[0]) {
              setwlticketowned(true);
            }
          } else if (res.data[i].Project === "zuku") {
            zukucounter++;
            if (res.data[i].Account === myAccount[0]) {
              setzukuticketowned(true);
            }
          } else if (res.data[i].Project === "degen") {
            degencounter++;
            if (res.data[i].Account === myAccount[0]) {
              setdegenticketowned(true);
            }
          } else if (res.data[i].Project === "hachi") {
            hachicounter++;
            if (res.data[i].Account === myAccount[0]) {
              sethachiticketowned(true);
            }
          } else if (res.data[i].Project === "bobs") {
            bobscounter++;
            if (res.data[i].Account === myAccount[0]) {
              setbobsticketowned(true);
            }
          } else if (res.data[i].Project === "mskd") {
            mskdcounter++;
            if (res.data[i].Account === myAccount[0]) {
              setmskdticketowned(true);
            }
          }
        }
        setsoukaticketamount(soukacount);
        setflickticketamount(flickcount);
        setnoodticketamount(noodcount);
        setwizardticketamount(wizardcount);
        setDodoticketamount(Dodocount);
        setmoonticketamount(Mooncount);
        setchunkticketamount(chunkcount);
        setalfieticketamount(alfiecount);
        setchosenticketamount(chosencount);
        setmazeticketamount(mazecount);
        setMythicalticketamount(Mythicalcount);
        setreadyticketamount(readycount);
        setpaladinticketamount(paladincount);
        setSleepyticketamount(Sleepycount);
        setnonoticketamount(nonocount);
        setabdticketamount(abdcount);
        setetherjumpticketamount(etherjumpcount);
        setinkuticketamount(inkucount);
        setETHVaultNFTticketamount(ETHVaultNFTcount);
        setkikiticketamount(kikicount);
        setdzticketamount(dzcount);
        setraceticketamount(racecount);
        sethelixticketamount(helixcount);
        setonlinerticketamount(onlinercount);
        setwlticketamount(wlcounter);
        setzukuticketamount(zukucounter);
        setdegenticketamount(degencounter);
        sethachiticketamount(hachicounter);
        setbobsticketamount(bobscounter);
        setmskdticketamount(mskdcounter);
      })
      .catch((err) => console.log(err));
  };

  const loadWeb3 = async () => {
    const web3 = await new ethers.providers.Web3Provider(window.ethereum);
    await web3
      .listAccounts()
      .then((acc) => {
        setMyWeb3(web3);
        setMyAccount(acc);
      })
      .catch((err) => console.log(err));
  };

  const getROOTxBalance = async () => {
    if (myAccount.length === 0) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const ROOTxContract = new Contract(
      contract.ROOTx[1],
      ROOTxABI,
      provider?.getSigner()
    );

    try {
      await ROOTxContract.balanceOf(myAccount[0])
        .then((r) => {
          const temp = r / 1000000000000000000;
          setROOTxBalance(temp);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const burnROOTx = async (amount, item) => {
    if (myAccount.length === 0) return;

    Swal.fire({
      icon: "question",
      title: "Burn ROOTx confirmation",
      text: `You are burning ${amount} ROOTx to get WL spot, continue?`,
      showCancelButton: true,
    })
      .then(async (res) => {
        if (res.isConfirmed) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const ROOTxContract = new Contract(
            contract.ROOTx[1],
            ROOTxABI,
            provider?.getSigner()
          );

          if (item === "souka") {
            setProName(item);
            setAddr(myAccount[0]);
            setsoukapending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setsoukapending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setsoukapending(false);
              setShowModal(false);
            }
          } else if (item === "flick") {
            setProName(item);
            setAddr(myAccount[0]);
            setflickpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setflickpending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setflickpending(false);
              setShowModal(false);
            }
          } else if (item === "nood") {
            setProName(item);
            setAddr(myAccount[0]);
            setnooedpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setflickpending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setnooedpending(false);
              setShowModal(false);
            }
          } else if (item === "wizard") {
            setProName(item);
            setAddr(myAccount[0]);
            setwizardpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setwizardpending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setwizardpending(false);
              setShowModal(false);
            }
          } else if (item === "Dodo") {
            setProName(item);
            setAddr(myAccount[0]);
            setDodopending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setDodopending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setDodopending(false);
              setShowModal(false);
            }
          } else if (item === "Moon") {
            setProName(item);
            setAddr(myAccount[0]);
            setmoonpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setmoonpending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setmoonpending(false);
              setShowModal(false);
            }
          } else if (item === "Chunk") {
            setProName(item);
            setAddr(myAccount[0]);
            setchunkpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setchunkpending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setchunkpending(false);
              setShowModal(false);
            }
          } else if (item === "Alfie") {
            setProName(item);
            setAddr(myAccount[0]);
            setalfiepending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setalfiepending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setalfiepending(false);
              setShowModal(false);
            }
          } else if (item === "Chosen") {
            setProName(item);
            setAddr(myAccount[0]);
            setchosenpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setchosenpending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setchosenpending(false);
              setShowModal(false);
            }
          } else if (item === "Maze") {
            setProName(item);
            setAddr(myAccount[0]);
            setmazepending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setmazepending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setmazepending(false);
              setShowModal(false);
            }
          } else if (item === "Mythical") {
            setProName(item);
            setAddr(myAccount[0]);
            setMythicalpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setMythicalpending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setMythicalpending(false);
              setShowModal(false);
            }
          } else if (item === "ready") {
            setProName(item);
            setAddr(myAccount[0]);
            setreadypending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setreadypending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setreadypending(false);
              setShowModal(false);
            }
          } else if (item === "paladin") {
            setProName(item);
            setAddr(myAccount[0]);
            setpaladinpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setpaladinpending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setpaladinpending(false);
              setShowModal(false);
            }
          } else if (item === "Sleepy") {
            setProName(item);
            setAddr(myAccount[0]);
            setSleepypending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setSleepypending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setSleepypending(false);
              setShowModal(false);
            }
          } else if (item === "nono") {
            setProName(item);
            setAddr(myAccount[0]);
            setnonopending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setnonopending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setnonopending(false);
              setShowModal(false);
            }
          } else if (item === "abd") {
            setProName(item);
            setAddr(myAccount[0]);
            setabdpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setabdpending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setabdpending(false);
              setShowModal(false);
            }
          } else if (item === "etherjump") {
            setProName(item);
            setAddr(myAccount[0]);
            setetherjumppending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setetherjumppending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setetherjumppending(false);
              setShowModal(false);
            }
          } else if (item === "inku") {
            setProName(item);
            setAddr(myAccount[0]);
            setinkupending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setinkupending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setinkupending(false);
              setShowModal(false);
            }
          } else if (item === "ETHVaultNFT") {
            setProName(item);
            setAddr(myAccount[0]);
            setETHVaultNFTpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setETHVaultNFTpending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setETHVaultNFTpending(false);
              setShowModal(false);
            }
          } else if (item === "kiki") {
            setProName(item);
            setAddr(myAccount[0]);
            setkikipending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setkikipending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setkikipending(false);
              setShowModal(false);
            }
          } else if (item === "dz") {
            setProName(item);
            setAddr(myAccount[0]);
            setdzpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setdzpending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setdzpending(false);
              setShowModal(false);
            }
          } else if (item === "race") {
            setProName(item);
            setAddr(myAccount[0]);
            setracepending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setracepending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setracepending(false);
              setShowModal(false);
            }
          } else if (item === "helix") {
            setProName(item);
            setAddr(myAccount[0]);
            sethelixpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              sethelixpending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              sethelixpending(false);
              setShowModal(false);
            }
          } else if (item === "onliner") {
            setProName(item);
            setAddr(myAccount[0]);
            setonlinerpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setonlinerpending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setonlinerpending(false);
              setShowModal(false);
            }
          } else if (item === "wl") {
            setProName(item);
            setAddr(myAccount[0]);
            setwlpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setwlpending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setwlpending(false);
              setShowModal(false);
            }
          } else if (item === "zuku") {
            setProName(item);
            setAddr(myAccount[0]);
            setzukupending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setzukupending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setzukupending(false);
              setShowModal(false);
            }
          } else if (item === "degen") {
            setProName(item);
            setAddr(myAccount[0]);
            setdegenpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setdegenpending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setdegenpending(false);
              setShowModal(false);
            }
          } else if (item === "hachi") {
            setProName(item);
            setAddr(myAccount[0]);
            sethachipending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              sethachipending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              sethachipending(false);
              setShowModal(false);
            }
          } else if (item === "bobs") {
            setProName(item);
            setAddr(myAccount[0]);
            setbobspending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setbobspending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setbobspending(false);
              setShowModal(false);
            }
          } else if (item === "mskd") {
            setProName(item);
            setAddr(myAccount[0]);
            setmskdpending(true);
            setShowModal(true);
            try {
              const tx = await ROOTxContract._burn(
                ethers.utils.parseUnits(String(amount), 18),
                { from: myAccount[0] }
              );
              await tx.wait();
              setShowModal(false);
              setmskdpending(false);
              Swal.fire({
                icon: "success",
                title: "Burn Success !",
                text: "You have successfully burned ROOTx!",
              })
                .then((res) => {
                  if (res.isConfirmed) {
                    setShowSettingModal(true);
                  }
                })
                .catch((err) => console.log(err));
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went Wrong!",
              });
              setmskdpending(false);
              setShowModal(false);
            }
          }
        }
      })
      .catch((err) => console.log(err));
  };

  const savesheet = async (val1, val2, val3) => {
    const expdata = {
      Project: val3,
      Account: val2,
      discordId: val1,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/e2580e2b-cc24-4aa0-86bf-39d52659b2d8",
        expdata
      )
      .then((res) => {
        setShowSettingModal(false);
        setTimeout(() => {
          window.location.replace("/Whitelist");
        }, 1000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Container className="mt-5">
        <Row>
          <div
            style={{
              textAlign: "center",
              fontSize: "45px",
              fontFamily: "editundo",
              color: "#ffae41",
              lineHeight: "100px",
            }}
          >
            Burn ROOTx for some very, very valuable items
          </div>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={mskd} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "39%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>MSKD</button>
                    <span>{mskdburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {mskdticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  MSKD NFT
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/MSKDnft"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="http://discord.gg/mskd"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {mskdticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : mskdpending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : mskdticketamount >= 3 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= mskdburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(mskdburnROOTx, "mskd")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={zuku} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>ZukuVerse</button>
                    <span>{zukuburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {zukuticketamount} / 2 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  8,888, ENTER THE JUNGLE, #ETH, discord closed
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/zukuverse"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/WK2rZnPAVE"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {zukuticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : zukupending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : zukuticketamount >= 2 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= zukuburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(zukuburnROOTx, "zuku")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={degen} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "33%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>FREE WORLD DEGEN </button>
                    <span>{degenburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {degenticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  Our collection creating a new history of global freedom in the world of NFTs. Free your mind and take the grain. #Solana
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/FWDNFT"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/uskZx8jKHq"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {degenticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : degenpending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : degenticketamount >= 3 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= degenburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(degenburnROOTx, "degen")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={hachi} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>HACHIDAO NFT</button>
                    <span>{hachiburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {hachiticketamount} / 2 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  Adorable manga and game inspired NFT collection.
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/HachiDaoNft"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/Bfga7jVtRW"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {hachiticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : hachipending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : hachiticketamount >= 2 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= hachiburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(hachiburnROOTx, "hachi")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={bobs} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "39%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>BOBS NFT</button>
                    <span>{bobsburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {bobsticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  BOBS A.K.A. BLOCKCHAIN OR BUST SOCIETY DEGEN MINT WEEKLY GAME GIVEAWAYS & DOXXED TEAM
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/blockchainobust"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/7QCJHpBX"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {bobsticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : bobspending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : bobsticketamount >= 3 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= bobsburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(bobsburnROOTx, "bobs")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          {/* <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={WL} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>WL</button>
                    <span>{wlburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {wlticketamount} / 25 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  Get a .bnb domain resolver on launch through our guaranteed WL
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/SpaceIDProtocol"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                </div>
                {wlticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : wlpending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : wlticketamount >= 25 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= wlburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(wlburnROOTx, "wl")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col> */}
          {/* <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={chunk} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>Chunk</button>
                    <span>{chunkburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {chunkticketamount} / 10 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  Chunk is a world that's been divided into 128x128 block
                  Chunks, and uses Stardust Labs' Terralith for custom world
                  generation. By owning a Chunk NFT, you own a corresponding
                  piece of this world that only you and your friends will be
                  able to develop. Your chunk will be playable on a Minecraft
                  server where you can survive, build, and thrive as a
                  community. Being limited to only the resources in your chunk,
                  you’ll need to trade with your fellow owners to achieve your
                  goals.
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/nft_chunk"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/QdP4fRjeHp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {chunkticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : chunkpending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : chunkticketamount >= 10 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= chunkburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(chunkburnROOTx, "Chunk")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={chosen} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>Chosenone</button>
                    <span>{chosenburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {chosenticketamount} / 2 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  5,555 Legendary Heroes with Graphics that will blow you away
                  for their upcoming 4v4 MOBA game. The collection will consist
                  of five characters and 1,111 in total. Presale May 31, 2022.
                  Fully doxxed team with a publicly traded company Good Gamer
                  developing the Game. Rest of the team from Electronic Arts,
                  Disney, Mechwarrior, Good Gamer, Infinity Esports and Mobilum.
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/chosenonesnft"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                </div>
                {chosenticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : chosenpending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : chosenticketamount >= 2 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= chosenburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(chosenburnROOTx, "Chosen")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={abd} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "32%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>
                      Abduction Squad
                    </button>
                    <span>{abdburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {abdticketamount} / 5 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  Genesis Collection 3,333, Play To Win Competition, Traits
                  Giveaway At Mint
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/AbductionSquad"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://t.co/BDCOeMubOj"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {abdticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : abdpending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : abdticketamount >= 5 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= abdburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(abdburnROOTx, "abd")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={etherjump} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "40%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>Ether Jump</button>
                    <span>
                      {etherjumpburnROOTx.toLocaleString("en-US")} ROOTx
                    </span>
                    <span style={{ marginTop: "10px" }}>
                      {etherjumpticketamount} / 2 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  First-ever customizable platformer NFT Build your own
                  adventure
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/InkuNFT"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/etherjump"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {etherjumpticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : etherjumppending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : etherjumpticketamount >= 2 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= etherjumpburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(etherjumpburnROOTx, "etherjump")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={kiki} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "40%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>Kiki verse</button>
                    <span>
                      {kikiburnROOTx.toLocaleString("en-US")} ROOTx
                    </span>
                    <span style={{ marginTop: "10px" }}>
                      {kikiticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  Unlock the magic of music!<br />
                  Multi-chain. <br />
                  Building the community that's inclusive of ETH and SOL.<br />
                  Women-let project by @cryborg_654 and artist @PepeCloverNFT.<br />
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/KikiVerseNFT"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/kikiverse"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {kikiticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : kikipending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : kikiticketamount >= 3 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= kikiburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(kikiburnROOTx, "kiki")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={dz} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "35%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}> Drippy zombies </button>
                    <span>
                      {dzburnROOTx.toLocaleString("en-US")} ROOTx
                    </span>
                    <span style={{ marginTop: "10px" }}>
                      {dzticketamount} / 10 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  Drippy Zombies is a collection of hand-drawn zombies. Drippy Zombies are known for their stylish and “drippy” aura. Traits inspired by global fashion trends and include unique pop culture references.
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/drippyzombies"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                </div>
                {dzticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : dzpending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : dzticketamount >= 10 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= dzburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(dzburnROOTx, "dz")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={race} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "30%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}> racing social club </button>
                    <span>
                      {raceburnROOTx.toLocaleString("en-US")} ROOTx
                    </span>
                    <span style={{ marginTop: "10px" }}>
                      {raceticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  Racing Social Club is a collection of 3333 Racers who are randomly generated on the Ethereum blockchain. The NFT comes with access to different utilities.
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/racingsocialnft"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.com/invite/racingsocialclubnft"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {raceticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : racepending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : raceticketamount >= 3 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= raceburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(raceburnROOTx, "race")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={helix} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "40%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>Helix</button>
                    <span>
                      {helixburnROOTx.toLocaleString("en-US")} ROOTx
                    </span>
                    <span style={{ marginTop: "10px" }}>
                      {helixticketamount} / 5 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  Helix Horizon is a Japanese-style fantasy RPG mobile game that took nearly two years to develop. Now, it has come to the blockchain world, and every player can get a game experience with great imagination and wealth value by collecting NFT cards!
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/HELIX_Metaverse"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/4AZFQvpM3Q"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {helixticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : helixpending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : helixticketamount >= 5 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= helixburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(helixburnROOTx, "helix")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={onliner} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "30%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>Onliners metaverse</button>
                    <span>
                      {onlinerburnROOTx.toLocaleString("en-US")} ROOTx
                    </span>
                    <span style={{ marginTop: "10px" }}>
                      {onlinerticketamount} / 5 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  We are a metaverse of 8000 Onliners who are trying to fit in this world. You can join us only if you are online.
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/onlinersNFT"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/onliners"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {onlinerticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : onlinerpending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : onlinerticketamount >= 5 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= onlinerburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(onlinerburnROOTx, "onliner")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col> */}
          {/* <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={souka} alt="shop images" fluid />
                </div>
              </div>
              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>SOUKA</button>
                    <span>{soukaburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {soukaticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <div className="description">
                  What is Souka? <br />
                  The Souk is the largest covered historic market in the NFT
                  world, based on IRL bazaar in the medieval times.
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/soukaland"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/souka"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {soukaticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : soukapending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : soukaticketamount >= 3 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= soukaburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(soukaburnROOTx, "souka")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={flick} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>flick play</button>
                    <span>{flickburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {flickticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  What is FlickyGang?<br></br> Flickygang NFT is a collection of
                  5,555 Unique 3D characters living in the Ethereum blockchain.
                  Investors from : The Sandbox, Warner Brothers, EventBrite,
                  Muse capital Each Flicky has a life of its own, and their
                  fashion taste highlights their personality and lifestyle. The
                  first-ever AR-powered NFT collection on the fully built &
                  functional app FlickPlay. FlickPlay is a social app where
                  people build the social status of their Digital Collectibles.
                  FlickPlay's map allows for users to unlock digital
                  collectibles in the real world and FlickPlay camera allows
                  users to flex their collectibles in the real world using AR,
                  bridging people's digital and physical realities together Team
                  is fully doxxed and just announced a partnership with Sandbox.
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/flickplay"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="http://discord.gg/flickplay"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {flickticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : flickpending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : flickticketamount >= 3 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= flickburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(flickburnROOTx, "flick")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={nood} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>NoodFTX</button>
                    <span>{noodburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {noodticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  Nood Fungible Token is an NFT project that aims to promote
                  body positivity, equality, and freedom within the NFT
                  community..This project will consist of 4444 unique Noodies
                  separated into 4 different drops in line with different
                  advocacies. Each drop from all collections is sure to be
                  unique and have their own flair. The ultimate goal of Nood
                  Fungible Tokens is to fully realize the potential of NFTs and
                  crypto in shaping our world to be a more safe and inclusive
                  space for all.
                </div>

                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/NoodFTOfficial"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                </div>
                {noodticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : noodpending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : noodticketamount >= 3 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= noodburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(noodburnROOTx, "nood")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={wizard} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "25%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>
                      Mystical wizards guild
                    </button>
                    <span>{wizardburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {wizardticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  Mystical Wizard Guild is the NFT behind the MysticSwap
                  platform, a peer-to-peer NFT trading platform for secure
                  trades and swaps. Example: you wanna sell your BearX to a
                  fren, privately. This is how you do it. Holders of the
                  Mystical Wizard NFT benefit from platform revenue, pay no fees
                  on the platform and gain access to an exclusive alpha group!
                  Twitter template below, to make your life easier too
                </div>{" "}
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/MystWizardGuild"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/vxmnE2v624"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {wizardticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : wizardpending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : wizardticketamount >= 3 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= wizardburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(wizardburnROOTx, "wizard")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={Dodo} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>The Dodos</button>
                    <span>{DodoburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {Dodoticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <div className="description">
                  Infinite Dodos is a complete ecosystem starting with an
                  Unhackable wallet. UTILITY READY AT MINT team spent 7 months
                  building before announcing the collection consisting of world
                  class entrepreneurs all Doxxed. Being apart of our Infinite
                  Dodos will enable you to be apart of all future and current
                  utility
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/InfiniteDodos"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/PhjW7PUdvm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {Dodoticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : Dodopending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : Dodoticketamount >= 3 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= DodoburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(DodoburnROOTx, "Dodo")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col> */}
          {/* <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={alfie} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>
                      Alfie World
                    </button>
                    <span>{alfieburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {alfieticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  The joyful and colorful Alfie World and its 8888 frens.
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/THEALFIEWORLD"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                </div>

                {alfieticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : alfiepending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : alfieticketamount >= 3 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= alfieburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(alfieburnROOTx, "Alfie")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col> */}
          {/* <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={maze} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>MazeVerse</button>
                    <span>{mazeburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {mazeticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  Pass to YesYes DAO | OnChain P2E | Discord: Private | From
                  Game: 赛尔号 | All Rights Reserved & Licensed By 淘米 Taomee
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/Mazeversenft"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/vkWdd2wUeP"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {mazeticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : mazepending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : mazeticketamount >= 3 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= mazeburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(mazeburnROOTx, "Maze")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col> */}
          {/* <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={Mythical} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>Mythicals</button>
                    <span>
                      {MythicalburnROOTx.toLocaleString("en-US")} ROOTx
                    </span>
                    <span style={{ marginTop: "10px" }}>
                      {Mythicalticketamount} / 25 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  First Liquid Yield NFT. We airdrop $ETH to you every month.
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/MythicalsDrops"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/mythicals"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {Mythicalticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : Mythicalpending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : Mythicalticketamount >= 25 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= MythicalburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(MythicalburnROOTx, "Mythical")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={ready} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "32%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>
                      Player One world{" "}
                    </button>
                    <span>{readyburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {readyticketamount} / 3 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  #PlayerOne is a #Metaverse project with integrating tools,
                  social scenes, #Omnichain NFT marketplace and #P2E system.
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/PlayerOneWorld"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/playeroneworld"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {readyticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : readypending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : readyticketamount >= 3 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= readyburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(readyburnROOTx, "ready")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={paladin} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "24%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>
                      PALADIN PENGUIN CLUB
                    </button>
                    <span>
                      {paladinburnROOTx.toLocaleString("en-US")} ROOTx
                    </span>
                    <span style={{ marginTop: "10px" }}>
                      {paladinticketamount} / 10 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  Play-to-earn game! Exclusive access to our land via The
                  Sandbox!
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/paladin_penguin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/5KzvcMzCQG"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {paladinticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : paladinpending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : paladinticketamount >= 10 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= paladinburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(paladinburnROOTx, "paladin")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={Sleepy} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "24%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>
                      SLEEPY SNIPER SOCIETY
                    </button>
                    <span>{SleepyburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {Sleepyticketamount} / 5 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  A suite of premium NFT trading tools - paired with a
                  competitive trading eco-system.
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/SleepySniperSoc"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/sleepysnipersociety"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {Sleepyticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : Sleepypending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : Sleepyticketamount >= 5 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= SleepyburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(SleepyburnROOTx, "Sleepy")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={nono} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "38%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>NoNo</button>
                    <span>{nonoburnROOTx.toLocaleString("en-US")} ROOTx</span>
                    <span style={{ marginTop: "10px" }}>
                      {nonoticketamount} / 5 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  NoNo is an assistant robot from a game called SEER. The
                  project aims to keep its holders profitable in Web3 with
                  YesYes DAO, a place to learn about the techniques of
                  institutional trading in the NFT secondary market.Members will
                  be selected from the original minters to join one of the four
                  investment seasons of the DAO, where they will trade in real
                  time with the help of established traders!
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/NoNosNFT"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                </div>
                {nonoticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : nonopending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : nonoticketamount >= 5 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= nonoburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(nonoburnROOTx, "nono")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={inku} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "40%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>INKU</button>
                    <span>
                      {inkuburnROOTx.toLocaleString("en-US")} ROOTx
                    </span>
                    <span style={{ marginTop: "10px" }}>
                      {etherjumpticketamount} / 1 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  1k Genesis collection & the first story based explore 2 earn game. Meet ghosts , fight demons , and battle the undead .
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/InkuNFT"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/z4DJvBynNC"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {inkuticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : inkupending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : inkuticketamount >= 2 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= inkuburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(inkuburnROOTx, "inku")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="load">
              <div className="load__up">
                <div className="load__img">
                  <Image src={ETHVaultNFT} alt="shop images" fluid />
                </div>
              </div>

              <div
                className="load__down"
                style={{ display: "block", textAlign: "center" }}
              >
                <div
                  className="point"
                  style={{
                    transform: "translate(-15%, 0)",
                    marginLeft: "37%",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <button style={{ marginBottom: "10px" }}>ETHVaultNFT</button>
                    <span>
                      {ETHVaultNFTburnROOTx.toLocaleString("en-US")} ROOTx
                    </span>
                    <span style={{ marginTop: "10px" }}>
                      {ETHVaultNFTticketamount} / 1 FILLED
                    </span>
                  </div>
                </div>
                <div className="description" style={{ overflowY: "scroll" }}>
                  This is ETHVaultNFT assets.<br />
                  Stake Against Your NFTs in Return for ETH!<br />
                  2,000 VaultBoosters!
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="footerSocialIcons"
                >
                  <div className="iconBox">
                    <a
                      href="https://twitter.com/ETHVaultNFT"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piTwitter} />
                    </a>
                  </div>
                  <div className="iconBox">
                    <a
                      href="https://discord.gg/PjXrHyc93Q"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={piDiscord} />
                    </a>
                  </div>
                </div>
                {ETHVaultNFTticketowned ? (
                  <button className="owned">ALREADY OWNED</button>
                ) : ETHVaultNFTpending ? (
                  <button>
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      animation="border"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                ) : ETHVaultNFTticketamount >= 1 ? (
                  <button style={{ marginTop: "10px" }}>SOLD OUT</button>
                ) : ROOTxBalance >= ETHVaultNFTburnROOTx ? (
                  <>
                    <button
                      onClick={() => burnROOTx(ETHVaultNFTburnROOTx, "ETHVaultNFT")}
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontFamily: "earlyGameboy",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      GET WHITELIST SPOT
                    </button>
                  </>
                ) : (
                  <button style={{ marginTop: "10px" }}>
                    NOT ENOUGH ROOTX
                  </button>
                )}
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>
      <Modal visible={showModal} width="450px" height="300px" effect="fadeInUp">
        <div style={{ marginLeft: "100px" }}>
          <img src={loading} alt="loading" />
        </div>
        <div className="about__details">
          <p style={{ color: "#fd7e14" }}>Processing...</p>
        </div>
      </Modal>
      <Modal
        visible={showSettingModal}
        width="500px"
        height="450px"
        effect="fadeInUp"
      >
        <p
          style={{
            color: "#fd7e14",
            textAlign: "center",
            marginTop: "10%",
            fontFamily: "earlyGameboy",
          }}
        >
          Input Discord Id to Get WL Spot!
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "2%",
            }}
          >
            <div
              style={{
                flex: "0.3",
                fontFamily: "earlyGameboy",
                fontSize: "12px",
                alignSelf: "center",
              }}
            >
              Discord ID
            </div>
            <div style={{ flex: "0.7" }}>
              <input
                type="text"
                id="discord"
                value={disId}
                onChange={(e) => setdisId(e.target.value)}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "2%",
            }}
          >
            <div
              style={{
                flex: "0.3",
                fontFamily: "earlyGameboy",
                fontSize: "12px",
                alignSelf: "center",
              }}
            >
              Account
            </div>
            <div style={{ flex: "0.7" }}>
              <input type="text" id="wallet" value={Addr} disabled />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "2%",
            }}
          >
            <div
              style={{
                flex: "0.3",
                fontFamily: "earlyGameboy",
                fontSize: "12px",
                alignSelf: "center",
              }}
            >
              Project
            </div>
            <div style={{ flex: "0.7" }}>
              <input type="text" id="project" value={ProName} disabled />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              fontSize: "12px",
              padding: "7px 13px",
              backgroundColor: "#fd7e14",
              color: "black",
              borderRadius: "50px",
              fontFamily: "earlyGameBoy",
              cursor: "pointer",
              border: "0px",
              marginTop: "3%",
            }}
            onClick={() => savesheet(disId, Addr, ProName)}
          >
            {" "}
            GET WHITELIST SPOT
          </button>
        </div>

        <div>
          <p
            style={{
              color: "#fd7e14",
              textAlign: "center",
              fontFamily: "earlyGameboy",
              marginTop: "5%",
              fontSize: "12px",
            }}
          >
            Input discord ID to purchase WL spot! <br></br>please ensure you
            copy and paste username from discord to avoid mistakes <br></br>Any
            incorrect discord usernames will not be chased, and no refunds will
            be given from mistakes. Double check your username before submitting
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default LoadCard;
