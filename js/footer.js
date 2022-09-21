//footer validation
$("#form-footer").submit(function(e){
    e.preventDefault()
    Swal.fire({
        icon:'success',
        title:'You are now Subscribed',
        text:'Thank you for subscribing to our newsletter. You can now enjoy exclusive backstage content.',
    });
    //clear footer
    $("#input-email-footer").val("");
});
