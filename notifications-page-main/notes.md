Data structure:

use a redux store
    slice of all notifications
        array of notifications objects
        notifications will be objects with following properties:
            id (number)
            userName (string)
            userAvatar (path to image)
            content (string - with possible links)
            isRead (boolean - to toggle between read and unread)
            date (see if we can perform calculations with dates using some library, or else we use numbers and keep it simple)
    slice of read notifications
        this slice will be an array of notifications objects
        iterate on all notifications and separate all with 'isRead = true'
    slice of unread notifications
        this slice will be an array of notifications objects
        iterate on all notifications and separate all with 'isRead = false'
            unreadCounter:
                iterate on unread notifications and show how many elements exists on that array
            markAllRead:
                action to toggle all isRead properties to 'true'


Interface structure:

use React and Styled Components

    <body> will represent the background of the page
        Will use 'grid' with 'auto rows' to render as many 'notif containers' as possible

    Main 'header' shall be entitled 'Notifications', aligned to the left
        the 'unread counter' should come immediately to the right of the title, as a number;
    
    'Mark all read' button aligned to the right;

    Notification container
        unread variation - changes bg color and adds orange dot aligned to the right
    
        Contains:
        <img> <Name> <Content> <URL 'optional'> <ReadStatusMarker>
        {on one line below, in smaller font}
        <Date>
    
