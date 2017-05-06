function DashboardController($scope) {

    this.amount = '';
    this.years = "";
    this.times = "1";
    this.rate = "";
    this.finalAmount = 0;
    this.calculatedInterest = 0;
    this.selectedInterest = 'compound';
    this.errorField = '';
    this.errorMessage = '';

    this.calculateCompoundInterest = function (e) {

        if(!this.amount ||  !(/^\d+(\.\d+)?$/.test(this.amount))){
            this.errorMessage = 'Please enter a valid amount';
        }

        else if(!this.rate ||  !(/^\d+(\.\d+)?$/.test(this.rate))){
            this.errorMessage = 'Please enter a valid rate of interest';
        }

        else if(!this.years ||  !(/^\d+(\.\d+)?$/.test(this.years))){
            this.errorMessage = 'Please enter valid number of years';
        }

        else{
            this.errorMessage =  "";
            this.finalAmount = (this.amount * Math.pow((1 + (this.rate/(this.times * 100))), (this.times * this.years)));
            this.calculatedInterest = this.finalAmount - this.amount;
        }

    };

    this.calculateSimpleInterest = function () {


        if(!this.amount ||  !(/^\d+(\.\d+)?$/.test(this.amount))){
            this.errorMessage = 'Please enter a valid amount';
        }

        else if(!this.rate ||  !(/^\d+(\.\d+)?$/.test(this.rate))){
            this.errorMessage = 'Please enter a valid rate of interest';
        }

        else if(!this.years ||  !(/^\d+(\.\d+)?$/.test(this.years))){
            this.errorMessage = 'Please enter valid number of years';
        }

        else{
            this.errorMessage = '';
            this.calculatedInterest = ((this.amount * this.years * this.rate) / 100);
            this.finalAmount = parseFloat(this.amount) + parseFloat(this.calculatedInterest);
        }


    };

    this.selectInterest = function (value) {
        this.amount = '';
        this.years = "";
        this.times = "1";
        this.rate = "";
        this.finalAmount = 0;
        this.selectedInterest = value
    };

    this.calculateInterest = function () {

        this.finalAmount = 0;
        this.calculatedInterest = 0;
        if(this.selectedInterest == 'compound'){
            this.calculateCompoundInterest();
        }else{
            this.calculateSimpleInterest();
        }

    };

}
