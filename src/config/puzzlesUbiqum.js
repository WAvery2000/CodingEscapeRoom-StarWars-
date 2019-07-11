export const puzzles =
{
    1: {
        title: "Access the Mainframe",
        description: "According to my intel, that cell has a panel that can be removed to allow access to the security mainframe. Find the panel, and decipher the code for accessing the mainframe.",
        solution: ["3923"],
        res: '4-Digit Code'
    },
    2: {
        title: "Pass the Security Check",
        description: "It seems that we have to pass a security check to break into the lock. The password is the binary representation of some number. I have attached the binary representation of ‘13’ to show how it works. Good luck!",
        solution: ["1000010"],
        img: "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1558098970/Binary.jpg",
        res: "Binary Code"

    },
    3: {
        title: "Find the Password File",
        description: "Great job cracking the code! Now that we are in the system, it is time to grab the information we are looking for. There sure are a lot of files though. It would be easier if we found the file path to password data and entered it directly.",
        solution: ["c:\\users\\javathehutt\\documents\\passwords.txt"],
        res: "c:\\_ _ _ _ _\\_ _ _ _ _\\_ _ _ _ _\\_ _ _ _ _"
    },
    4: {
        title: "Decrypt the File",
        description: "The file seems to be encrypted. Decrypt the file and find your cell’s password, so we can get you out of there.",
        solution: ["8327"],
        img: "https://res.cloudinary.com/dnmity2ao/image/upload/v1562830300/Escape%20Room/escape_room_final_ia2lws.png",
        res: "4-Digit Code",
    },
    5: {
        title: "Escape",
        description: "There should be a floor plan somewhere. Take a look at it and let me know what path you need to take to get out so I can check that it is all clear.",
        solution: ["right, right, left, right, right, left, left, right, left, right, right, left, right, left, right, right, left, right, left, right, left"],
        res: "left/right, left/right, left/right, ...",
    },
    6: {
        title: "Just Like the Simulations",
        description: "Alright soldier, good work. Time to assess how fast you finished this simulation. Enter your time in minutes and seconds below.",
        solution: ["test"],
        res: "HH:mm:ss",
        last: "true"
    },

}
